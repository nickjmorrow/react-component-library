import { useThemeContext } from '@nickjmorrow/react-component-library';
import * as React from 'react';

export const ContentWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { spacing } = useThemeContext();
    return <div style={{ maxWidth: spacing.ss192 }}>{children}</div>;
};
