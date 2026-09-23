import * as React from 'react';
import { Dialog } from 'radix-ui';
import { Paper } from './Paper';
import { Modal } from './Modal';
import styled from 'styled-components';
import { CloseIcon } from '../icons/CloseIcon';
import { ThemeContext } from '~/theming';
import { Theme } from '~/types';
import { shouldForwardProp } from '~/styled';

export const PaperModal: React.FC<{
    isOpen: boolean;
    /** Accessible name announced by screen readers; not rendered visibly. */
    title?: string;
    className?: string;
    styles?: React.CSSProperties;
    wrapperStyles?: React.CSSProperties;
    children: React.ReactNode;
    onRequestClose: () => void;
}> = ({ children, title, className, styles, wrapperStyles, onRequestClose: handleRequestClose, isOpen }) => {
    const theme = React.useContext(ThemeContext);
    return (
        <Modal isOpen={isOpen} title={title} onRequestClose={handleRequestClose}>
            <Paper className={className} style={styles}>
                <Dialog.Close asChild>
                    <CloseButton aria-label="Close">
                        <CloseIcon sizeVariant={4} />
                    </CloseButton>
                </Dialog.Close>
                <Wrapper manualTheme={theme} style={wrapperStyles}>
                    {children}
                </Wrapper>
            </Paper>
        </Modal>
    );
};

const Wrapper = styled('div').withConfig({ shouldForwardProp })<{ manualTheme: Theme }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: ${p => `${p.manualTheme.spacing.ss8} ${p.manualTheme.spacing.ss8} 0 ${p.manualTheme.spacing.ss8}`};
`;

const CloseButton = styled.button`
    position: absolute;
    right: 60px;
    top: 60px;
    display: flex;
    padding: 0;
    border: none;
    background: none;
    cursor: pointer;
`;
