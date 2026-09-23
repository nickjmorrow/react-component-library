import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { describe, expect, it } from 'vitest';
import { IOption } from '~/types';
import { Multiselect } from './Multiselect';
import { Select } from './Select';

const options: IOption[] = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
    { value: 3, label: 'three' },
];

const ControlledSelect = () => {
    const [currentOption, setCurrentOption] = React.useState(options[0]);
    return <Select label="Number" options={options} currentOption={currentOption} onChange={setCurrentOption} />;
};

const ControlledMultiselect = () => {
    const [currentOptions, setCurrentOptions] = React.useState<IOption[]>([]);
    return (
        <Multiselect label="Numbers" options={options} currentOptions={currentOptions} onChange={setCurrentOptions} />
    );
};

describe('Select', () => {
    it('is labelled and selects an option with the mouse', async () => {
        const user = userEvent.setup();
        render(<ControlledSelect />);
        const trigger = screen.getByRole('combobox', { name: 'Number' });
        expect(trigger).toHaveTextContent('one');

        await user.click(trigger);
        await user.click(screen.getByRole('option', { name: 'two' }));

        expect(screen.queryByRole('listbox')).toBeNull();
        expect(trigger).toHaveTextContent('two');
    });

    it('is operable with the keyboard', async () => {
        const user = userEvent.setup();
        render(<ControlledSelect />);
        const trigger = screen.getByRole('combobox', { name: 'Number' });

        trigger.focus();
        await user.keyboard('{Enter}');
        expect(screen.getByRole('listbox')).toBeInTheDocument();

        await user.keyboard('{ArrowDown}{ArrowDown}{Enter}');
        expect(screen.queryByRole('listbox')).toBeNull();
        expect(trigger).toHaveTextContent('three');
        expect(trigger).toHaveFocus();
    });

    it('closes on Escape without changing the value', async () => {
        const user = userEvent.setup();
        render(<ControlledSelect />);
        const trigger = screen.getByRole('combobox', { name: 'Number' });

        await user.click(trigger);
        await user.keyboard('{Escape}');

        expect(screen.queryByRole('listbox')).toBeNull();
        expect(trigger).toHaveTextContent('one');
    });
});

describe('Multiselect', () => {
    it('toggles several options while staying open', async () => {
        const user = userEvent.setup();
        render(<ControlledMultiselect />);
        const trigger = screen.getByRole('button', { name: /Numbers/ });

        await user.click(trigger);
        await user.click(screen.getByRole('menuitemcheckbox', { name: 'one' }));
        await user.click(screen.getByRole('menuitemcheckbox', { name: 'three' }));

        expect(screen.getByRole('menuitemcheckbox', { name: 'one' })).toHaveAttribute('aria-checked', 'true');
        expect(screen.getByRole('menuitemcheckbox', { name: 'two' })).toHaveAttribute('aria-checked', 'false');
        expect(trigger).toHaveTextContent('one, three');

        await user.click(screen.getByRole('menuitemcheckbox', { name: 'one' }));
        expect(trigger).toHaveTextContent('three');

        await user.keyboard('{Escape}');
        expect(screen.queryByRole('menu')).toBeNull();
    });
});
