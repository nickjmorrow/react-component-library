import * as React from 'react';
import { Paper, useThemeContext } from '@nickjmorrow/react-component-library';
/* tslint:disable-next-line */

export const DisplayPaper: React.SFC<{
    style?: React.CSSProperties;
    onClick?: () => void;
    props?: React.HTMLProps<HTMLDivElement>;
}> = ({ children, style, ...props }) => {
    const theme = useThemeContext();

    const defaultStyle = {
        marginBottom: theme.spacing.ss12,
        marginTop: theme.spacing.ss6,
        width: 'max-content',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '700px',
        borderRadius: '6px',
    };
    return (
        <Paper {...props} style={{ ...defaultStyle, ...style }}>
            {children}
        </Paper>
    );
};
