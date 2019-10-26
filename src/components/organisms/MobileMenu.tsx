import * as React from 'react';
import styled from 'styled-components';
import { CloseIconButton } from '../atoms';
import { GetComponentProps } from '~/typeUtilities';
import { SideNav } from './SideNav';

export const MobileMenu: React.FC<{
    onClose: () => void;
    navInfos: GetComponentProps<typeof SideNav>['navInfos'];
}> = ({ onClose: handleClose, navInfos }) => {
    const handleLinkClick = () => handleClose();
    return (
        <Wrapper>
            <CloseIconButton
                onClick={handleClose}
                style={{ position: 'absolute', right: '15px', top: '18px', zIndex: 3 }}
            />
            <SideNav
                navInfos={navInfos}
                marginTop={'0'}
                styleApi={{
                    navElementStyle: { width: '100%' },
                    wrapperStyle: { width: '100%' },
                    navStyle: { height: '100vh' },
                }}
                onLinkClick={handleLinkClick}
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 99;
`;
