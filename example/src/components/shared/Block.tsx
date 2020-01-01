import { StyleConstant, ThemeContext } from '@nickjmorrow/react-component-library';
import styled from 'styled-components';
import * as React from 'react';

export const Block: React.FC<
    {
        color?: string;
        boxShadow?: string;
    } & React.PropsWithoutRef<JSX.IntrinsicElements['div']>
> = ({ color, boxShadow: boxShadowOverride, ...props }) => {
    const {
        spacing,
        border: { borderRadius },
        boxShadow,
        colors,
    } = React.useContext(ThemeContext);

    const finalColor = color || colors.core.cs5;

    return (
        <StyledBlock
            color={finalColor}
            spacing={spacing}
            borderRadius={borderRadius}
            boxShadow={boxShadowOverride || boxShadow.bs1}
            {...props}
        />
    );
};

const StyledBlock = styled('div')<{
    color: string;
    spacing: StyleConstant<'spacing'>;
    borderRadius: StyleConstant<'border'>['borderRadius'];
    boxShadow?: string;
}>`
    width: ${p => p.spacing.ss16};
    height: ${p => p.spacing.ss16};
    margin: ${p => `${p.spacing.ss2} ${p.spacing.ss4} ${p.spacing.ss2} 0`};
    margin: 0 12px 6px 0;
    border-radius: ${p => p.borderRadius.br1};
    background-color: ${props => props.color};
    box-shadow: ${p => p.boxShadow};
`;
