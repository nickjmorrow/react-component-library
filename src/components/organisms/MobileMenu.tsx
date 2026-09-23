import * as React from 'react';
import styled from 'styled-components';
import { CloseIconButton } from '../atoms';
import { useThemeContext } from '~/theming';
import { GetComponentProps } from '~/typeUtilities';
import { SideNav } from './SideNav';
import { SideNavRouterContainer } from './SideNavRouterContainer';

export const MobileMenu: React.FC<{
    onClose: () => void;
    navInfos: GetComponentProps<typeof SideNav>['navInfos'];
    /** Extra controls (e.g. from the app bar) shown at the bottom of the menu. */
    footer?: React.ReactNode;
}> = ({ onClose: handleClose, navInfos, footer }) => {
    const handleLinkClick = () => handleClose();
    const { colors, spacing } = useThemeContext();
    return (
        <Wrapper $background={colors.background}>
            <CloseIconButton
                onClick={handleClose}
                style={{ position: 'absolute', right: '15px', top: '18px', zIndex: 3 }}
            />
            <SideNavRouterContainer
                navInfos={navInfos}
                styleApi={{
                    navLinkStyle: { width: '100%' },
                    wrapperStyle: { width: '100%' },
                    navStyle: { height: '100vh' },
                }}
                onLinkClick={handleLinkClick}
            />
            {footer && <Footer $padding={spacing.ss6}>{footer}</Footer>}
        </Wrapper>
    );
};

const Wrapper = styled.div<{ $background: string }>`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: ${p => p.$background};
    z-index: 99;
`;

const Footer = styled.div<{ $padding: string }>`
    position: absolute;
    left: ${p => p.$padding};
    bottom: ${p => p.$padding};
`;
