import { act, render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as React from 'react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { ColorModePicker, getThemeFromNewInputs, useColorModePreference } from '~/index';

const lightness = (hsl: string) => Number(hsl.match(/([\d.]+)%\)$/)![1]);

describe('dark mode theme', () => {
    const light = getThemeFromNewInputs({});
    const dark = getThemeFromNewInputs({ mode: 'dark' });

    it('leaves light mode output unchanged', () => {
        expect(light.mode).toBe('light');
        expect(light.colors.background).toBe('hsl(0, 0%, 100%)');
        expect(light.colors.core.cs5).toBe('hsl(220, 55%, 50%)');
        expect(light.colors.fixedNeutral).toEqual(light.colors.neutral);
    });

    it('mirrors every scale so cs1 stays nearest the background', () => {
        expect(dark.mode).toBe('dark');
        expect(dark.colors.background).toBe(dark.colors.neutral.cs1);
        for (const palette of ['neutral', 'core', 'accent', 'success', 'warning', 'danger'] as const) {
            const shades = Object.values(dark.colors[palette]).map(lightness);
            expect(shades).toEqual([...shades].sort((a, b) => a - b));
        }
        expect(lightness(dark.colors.background)).toBeLessThan(15);
    });

    it('keeps light text colors on the neutral scale and brightens them in dark mode', () => {
        expect(light.colors.text.primary).toBe(light.colors.neutral.cs7);
        expect(light.colors.text.secondary).toBe(light.colors.neutral.cs5);
        expect(lightness(dark.colors.text.primary)).toBe(94);
        expect(lightness(dark.colors.text.secondary)).toBeCloseTo(60, 0);
    });

    it('keeps the fixed neutral scale light so text on fills stays readable', () => {
        expect(dark.colors.fixedNeutral).toEqual(light.colors.neutral);
    });
});

describe('useColorModePreference', () => {
    let prefersDark = false;
    const listeners = new Set<() => void>();

    beforeEach(() => {
        localStorage.clear();
        prefersDark = false;
        vi.stubGlobal(
            'matchMedia',
            vi.fn((query: string) => ({
                get matches() {
                    return query === '(prefers-color-scheme: dark)' && prefersDark;
                },
                addEventListener: (_: string, listener: () => void) => listeners.add(listener),
                removeEventListener: (_: string, listener: () => void) => listeners.delete(listener),
            })),
        );
    });
    afterEach(() => vi.unstubAllGlobals());

    it('defaults to following the system, live', () => {
        const { result } = renderHook(() => useColorModePreference('test-mode'));
        expect(result.current.preference).toBe('system');
        expect(result.current.mode).toBe('light');

        act(() => {
            prefersDark = true;
            listeners.forEach(listener => listener());
        });
        expect(result.current.mode).toBe('dark');
    });

    it('persists an explicit choice and clears it for system', () => {
        const { result } = renderHook(() => useColorModePreference('test-mode'));
        act(() => result.current.setPreference('dark'));
        expect(result.current.mode).toBe('dark');
        expect(localStorage.getItem('test-mode')).toBe('dark');

        const { result: reloaded } = renderHook(() => useColorModePreference('test-mode'));
        expect(reloaded.current.preference).toBe('dark');

        act(() => result.current.setPreference('system'));
        expect(localStorage.getItem('test-mode')).toBeNull();
    });
});

describe('ColorModePicker', () => {
    const Picker = () => {
        const [value, setValue] = React.useState<'light' | 'dark' | 'system'>('system');
        return <ColorModePicker value={value} onChange={setValue} />;
    };

    it('is a labelled single-choice group that always keeps a selection', async () => {
        const user = userEvent.setup();
        render(<Picker />);
        expect(screen.getByRole('radiogroup', { name: 'Color theme' })).toBeInTheDocument();
        const dark = screen.getByRole('radio', { name: 'Dark theme' });

        await user.click(dark);
        expect(dark).toHaveAttribute('aria-checked', 'true');
        expect(screen.getByRole('radio', { name: 'Match system theme' })).toHaveAttribute('aria-checked', 'false');

        // Clicking the active option again doesn't leave the group with nothing selected.
        await user.click(dark);
        expect(dark).toHaveAttribute('aria-checked', 'true');
    });
});
