import * as React from 'react';
import { Paper } from './Paper';
import { Modal } from './Modal';
import styled, { css } from 'styled-components';
import { CloseIcon } from '../icons/CloseIcon';
import { ThemeContext } from '~/theming';
import { Theme } from '~/types';

export const PaperModal: React.SFC<{
    isOpen: boolean;
    className?: string;
    styles?: React.CSSProperties;
    wrapperStyles?: React.CSSProperties;
    children: React.ReactNode;
    onRequestClose: () => void;
}> = ({ children, className, styles, wrapperStyles, onRequestClose: handleRequestClose, isOpen }) => {
    const theme = React.useContext(ThemeContext);
    return (
        <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
            <Paper className={className} style={styles}>
                <CloseIcon onClick={handleRequestClose} style={iconStyle} sizeVariant={4} />
                <Wrapper manualTheme={theme} style={wrapperStyles}>
                    {children}
                </Wrapper>
            </Paper>
        </Modal>
    );
};

const Wrapper = styled('div')<{ manualTheme: Theme }>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: ${p => `${p.manualTheme.spacing.ss8} ${p.manualTheme.spacing.ss8} 0 ${p.manualTheme.spacing.ss8}`};
`;

const iconStyle: React.CSSProperties = {
    position: 'absolute',
    right: '60px',
    top: '60px',
    cursor: 'pointer',
};
