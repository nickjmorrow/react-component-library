import * as React from 'react';
import ReactModal from 'react-modal';
import { createGlobalStyle } from 'styled-components';
import { ThemeContext } from '~/theming';

export const Modal: React.FC<{
    isOpen: boolean;
    children?: React.ReactNode;
    onRequestClose(): void;
}> = ({ isOpen, children, onRequestClose: handleRequestClose }) => {
    const { boxShadow } = React.useContext(ThemeContext);
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: 'none',
        },
    };

    return (
        <>
            <ModalGlobalStyle $boxShadow={boxShadow.bs5} />
            <ReactModal
                style={customStyles}
                isOpen={isOpen}
                onRequestClose={handleRequestClose}
                closeTimeoutMS={100}
                ariaHideApp={false}
            >
                {children}
            </ReactModal>
        </>
    );
};

const ModalGlobalStyle = createGlobalStyle<{ $boxShadow: string }>`
    .ReactModalPortal > div {
        opacity: 0;
        box-shadow: ${p => p.$boxShadow};
    }
    .ReactModalPortal .ReactModal__Overlay {
        transition: opacity 200ms ease-in-out;
        background: rgba(0, 0, 0, 0.15);
    }
    .ReactModalPortal .ReactModal__Overlay--after-open {
        opacity: 1;
        background-color: rgba(0, 0, 0, 0.4) !important;
    }
    .ReactModalPortal .ReactModal__Overlay--before-close {
        opacity: 0;
    }
`;
