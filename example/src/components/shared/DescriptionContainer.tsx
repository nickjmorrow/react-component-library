import * as React from 'react';
import { ThemeContext } from '@nickjmorrow/react-component-library';

export const DescriptionContainer: React.FC = ({ children }) => {
    const { spacing } = React.useContext(ThemeContext);
    return <div style={{ maxWidth: '700px', marginBottom: spacing.ss4 }}>{children}</div>;
};
