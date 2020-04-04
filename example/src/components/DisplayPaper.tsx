import * as React from 'react';
import { Paper, ThemeContext } from '@nickjmorrow/react-component-library';
/* tslint:disable-next-line */

export const DisplayPaper: React.SFC<{
    style?: React.CSSProperties;
    onClick?: () => void;
    props?: React.HTMLProps<HTMLDivElement>;
}> = ({ children, style, ...props }) => {
    const { spacing } = React.useContext(ThemeContext);
    const defaultStyle = {
        marginBottom: spacing.ss12,
        marginTop: spacing.ss6,
        width: 'max-content',
        display: 'flex',
        flexDirection: 'row' as 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        maxWidth: '700px',
    };
    return (
        <Paper {...props} style={{ ...defaultStyle, ...style }}>
            {children}
        </Paper>
    );
};
