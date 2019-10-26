import * as React from 'react';
import { Paper } from './Paper';
import { Modal } from './Modal';
import styled, { css } from 'styled-components';
import { CloseIcon } from '../icons/CloseIcon';
import { ThemeContext } from '../../../styleConstants';
import { StyleConstant } from '../../../typeUtilities';

export const PaperModal: React.SFC<{
    isOpen: boolean;
    useMargin?: boolean;
    onRequestClose: () => void;
}> = ({ children, onRequestClose: handleRequestClose, isOpen, useMargin = true }) => {
    const { spacing } = React.useContext(ThemeContext);
    return (
        <Modal isOpen={isOpen} onRequestClose={handleRequestClose}>
            <Paper>
                <CloseIcon onClick={handleRequestClose} style={iconStyle} sizeVariant={4} />
                <Wrapper useMargin={useMargin} spacing={spacing}>
                    {children}
                </Wrapper>
            </Paper>
        </Modal>
    );
};

interface WrapperProps {
    spacing: StyleConstant<'spacing'>;
    useMargin: boolean;
}

const Wrapper = styled('div')<WrapperProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    ${p =>
        p.useMargin &&
        css`
            margin: ${p.spacing.ss8} ${p.spacing.ss8} 0 ${p.spacing.ss8};
        `}
`;

const iconStyle: React.CSSProperties = {
    position: 'absolute',
    right: '44px',
    top: '54px',
    cursor: 'pointer',
};
