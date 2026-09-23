import * as React from 'react';
import type { ColorMode } from './styling/styleProviders';
import { useMediaQuery } from './useMediaQuery';

export type ColorModePreference = ColorMode | 'system';

const isColorMode = (value: unknown): value is ColorMode => value === 'light' || value === 'dark';

const readStoredPreference = (storageKey: string): ColorModePreference => {
    try {
        const stored = localStorage.getItem(storageKey);
        return isColorMode(stored) ? stored : 'system';
    } catch {
        // Storage can be blocked (private mode, disabled cookies); fall back to following the system.
        return 'system';
    }
};

/**
 * Tracks a light/dark/system preference, persisted to localStorage. `mode` is the resolved mode to pass
 * to the theme; with "system" it follows the OS setting live. Choosing "system" clears the stored value,
 * so a visitor who never picks keeps following their OS.
 */
export const useColorModePreference = (storageKey = 'color-mode') => {
    const [preference, setPreferenceState] = React.useState<ColorModePreference>(() =>
        readStoredPreference(storageKey),
    );
    const systemPrefersDark = useMediaQuery('(prefers-color-scheme: dark)');
    const mode: ColorMode = preference === 'system' ? (systemPrefersDark ? 'dark' : 'light') : preference;

    const setPreference = React.useCallback(
        (next: ColorModePreference) => {
            setPreferenceState(next);
            try {
                if (next === 'system') {
                    localStorage.removeItem(storageKey);
                } else {
                    localStorage.setItem(storageKey, next);
                }
            } catch {
                // The choice just won't persist across visits; it still applies now.
            }
        },
        [storageKey],
    );

    return { preference, mode, setPreference };
};
