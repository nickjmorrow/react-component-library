import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import * as React from 'react';
import { afterEach, describe, expect, it } from 'vitest';
import { IOption } from '~/types';
import { Select } from './Select';

const options: IOption[] = [
    { value: 1, label: 'one' },
    { value: 2, label: 'two' },
];

const ControlledSelect = () => {
    const [currentOption, setCurrentOption] = React.useState(options[0]);
    return <Select options={options} currentOption={currentOption} onChange={setCurrentOption} />;
};

const isMenuOpen = () => document.querySelector('[aria-hidden]')?.getAttribute('aria-hidden') === 'false';

describe('Select', () => {
    afterEach(cleanup);

    it('opens on click, selects an option, and closes', () => {
        render(<ControlledSelect />);
        expect(isMenuOpen()).toBe(false);

        fireEvent.click(screen.getAllByText('one')[0]);
        expect(isMenuOpen()).toBe(true);

        fireEvent.click(screen.getByText('two'));
        expect(isMenuOpen()).toBe(false);
        expect(screen.getAllByText('two')).toHaveLength(2);
    });

    it('closes when clicking outside', () => {
        render(<ControlledSelect />);
        fireEvent.click(screen.getAllByText('one')[0]);
        expect(isMenuOpen()).toBe(true);

        act(() => {
            document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }));
        });
        expect(isMenuOpen()).toBe(false);
    });
});
