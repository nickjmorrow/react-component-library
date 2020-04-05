import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import { useThemeContext } from '~/theming';
import { Typography } from '~/components/atoms';
import { Fade } from '~/components/animations';
import { Theme } from '~/typeUtilities';

export const TextInput: React.SFC<
    { errors?: string[]; label?: string } & React.PropsWithoutRef<JSX.IntrinsicElements['input']>
> = ({ errors = [], label, ...props }) => {
    const theme = useThemeContext();

    // TODO: save off somewhere else so error styling can be reused
    const renderErrors = (error: string) => (
        <Fade
            in={errors.length > 0}
            transitionVariant={'medium'}
            styleKeys={['top', 'height']}
            mounted={{ top: '0px', height: '15px' }}
            unmounted={{ top: '-10px', height: '0px' }}
            style={{ position: 'relative' }}
        >
            <Typography sizeVariant={1} colorVariant={'danger'} style={{ marginTop: theme.spacing.ss1 }}>
                {error}
            </Typography>
        </Fade>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography sizeVariant={1}>{label}</Typography>
            <Input hasErrors={errors.length > 0} manualTheme={theme} {...props} />
            <FlexColumn>
                <TransitionGroup>{errors.map(renderErrors)}</TransitionGroup>
            </FlexColumn>
        </div>
    );
};

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled('input')<{
    hasErrors: boolean;
    manualTheme: Theme;
}>`
    outline: none;
    width: ${p => p.manualTheme.spacing.ss64};
    padding: ${p => p.manualTheme.spacing.ss3};
    background-color: ${p => p.manualTheme.colors.neutral.cs2};
    border-radius: ${p => p.manualTheme.border.borderRadius.br1};
    border: ${p => p.manualTheme.border.borderStyle.bs1} ${p => p.manualTheme.colors.transparent};
    border-left-width: ${p => (p.hasErrors ? '2px' : p.manualTheme.border.borderStyle.bs1)};
    border-left-color: ${p => (p.hasErrors ? p.manualTheme.colors.danger.cs3 : p.manualTheme.colors.transparent)};
    type: ${p => p.type};
    font-weight: ${p => p.manualTheme.typography.fontWeights.fw5};
    font-family: ${p => p.manualTheme.typography.fontFamily.default};
    font-size: ${p => p.manualTheme.typography.fontSizes.fs3};
    box-sizing: border-box;
    transition: box-shadow ${p => p.manualTheme.transitions.medium},
        border-left-color ${p => p.manualTheme.transitions.medium};
    &:hover {
        box-shadow: ${p => p.manualTheme.defaultShowBoxShadow && p.manualTheme.boxShadow.bs1};
        transition: box-shadow ${p => p.manualTheme.transitions.medium};
    }
    &:focus {
        box-shadow: ${p => p.manualTheme.defaultShowBoxShadow && p.manualTheme.boxShadow.bs2};
        transition: all ${p => p.manualTheme.transitions.medium};
    }
`;
