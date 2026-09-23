import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { describe, expect, it, vi } from 'vitest';
// Import through the public entry point, like consumers do (the component folders import each other circularly).
import { ButtonModal } from '~/index';

const ModalWithOpener = ({ onPrimaryClick = () => undefined }: { onPrimaryClick?: () => void }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <>
            <button onClick={() => setIsOpen(true)}>Open</button>
            <ButtonModal
                isOpen={isOpen}
                title="Delete item"
                onRequestClose={() => setIsOpen(false)}
                primaryButtonInfo={{ element: 'Confirm', onClick: onPrimaryClick }}
            >
                Are you sure?
            </ButtonModal>
        </>
    );
};

describe('ButtonModal', () => {
    it('opens as a named, modal dialog and moves focus into it', async () => {
        const user = userEvent.setup();
        render(<ModalWithOpener />);

        await user.click(screen.getByRole('button', { name: 'Open' }));

        const dialog = screen.getByRole('dialog', { name: 'Delete item' });
        expect(dialog).toContainElement(document.activeElement as HTMLElement);
    });

    it('closes on Escape and returns focus to the opener', async () => {
        const user = userEvent.setup();
        render(<ModalWithOpener />);
        const opener = screen.getByRole('button', { name: 'Open' });

        await user.click(opener);
        await user.keyboard('{Escape}');

        expect(screen.queryByRole('dialog')).toBeNull();
        // Radix restores focus on the next tick after the dialog unmounts.
        await waitFor(() => expect(opener).toHaveFocus());
    });

    it('closes from the close button and the primary action', async () => {
        const user = userEvent.setup();
        const handlePrimaryClick = vi.fn();
        render(<ModalWithOpener onPrimaryClick={handlePrimaryClick} />);

        await user.click(screen.getByRole('button', { name: 'Open' }));
        await user.click(screen.getByRole('button', { name: 'Close' }));
        expect(screen.queryByRole('dialog')).toBeNull();

        await user.click(screen.getByRole('button', { name: 'Open' }));
        await user.click(screen.getByText('Confirm'));
        expect(handlePrimaryClick).toHaveBeenCalledOnce();
        expect(screen.queryByRole('dialog')).toBeNull();
    });
});
