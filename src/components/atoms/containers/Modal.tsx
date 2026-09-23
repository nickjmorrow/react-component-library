import * as React from 'react';
import { Dialog, VisuallyHidden } from 'radix-ui';
import styled, { keyframes } from 'styled-components';

// Radix Dialog handles focus trapping, focus return, Escape, scroll locking and aria-modal.
export const Modal: React.FC<{
    isOpen: boolean;
    /** Accessible name announced by screen readers; not rendered visibly. */
    title?: string;
    children?: React.ReactNode;
    onRequestClose(): void;
}> = ({ isOpen, title = 'Dialog', children, onRequestClose: handleRequestClose }) => {
    // Radix only returns focus to its own Dialog.Trigger; this modal is opened from outside via
    // isOpen, so remember what had focus when it opened and restore it on close.
    const returnFocusRef = React.useRef<HTMLElement | null>(null);

    return (
        <Dialog.Root open={isOpen} onOpenChange={open => !open && handleRequestClose()}>
            <Dialog.Portal>
                <Overlay />
                <Content
                    aria-describedby={undefined}
                    onOpenAutoFocus={() => {
                        returnFocusRef.current = document.activeElement as HTMLElement | null;
                    }}
                    onCloseAutoFocus={e => {
                        e.preventDefault();
                        returnFocusRef.current?.focus();
                    }}
                >
                    <VisuallyHidden.Root>
                        <Dialog.Title>{title}</Dialog.Title>
                    </VisuallyHidden.Root>
                    {children}
                </Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

const fadeIn = keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
`;

const fadeOut = keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
`;

const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.4);
    &[data-state='open'] {
        animation: ${fadeIn} 200ms ease-in-out;
    }
    &[data-state='closed'] {
        animation: ${fadeOut} 100ms ease-in-out;
    }
`;

const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 90vh;
    outline: none;
    &[data-state='open'] {
        animation: ${fadeIn} 200ms ease-in-out;
    }
    &[data-state='closed'] {
        animation: ${fadeOut} 100ms ease-in-out;
    }
`;
