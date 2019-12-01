import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

import { useThemeContext } from '~/styleConstants';
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
            <Input hasErrors={errors.length > 0} theme={theme} {...props} />
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
    theme: Theme;
}>`
    outline: none;
    width: ${p => p.theme.spacing.ss64};
    padding: ${p => p.theme.spacing.ss3};
    background-color: ${p => p.theme.colors.neutral.cs2};
    border-radius: ${p => p.theme.border.borderRadius.br1};
    border: ${p => p.theme.border.borderStyle.bs1} ${p => p.theme.colors.transparent};
    border-left-width: ${p => (p.hasErrors ? '2px' : p.theme.border.borderStyle.bs1)};
    border-left-color: ${p => (p.hasErrors ? p.theme.colors.danger.cs3 : p.theme.colors.transparent)};
    type: ${p => p.type};
    font-weight: ${p => p.theme.typography.fontWeights.fw5};
    font-family: ${p => p.theme.typography.fontFamily.default};
    font-size: ${p => p.theme.typography.fontSizes.fs3};
    box-sizing: border-box;
    transition: box-shadow ${p => p.theme.transitions.medium}, border-left-color ${p => p.theme.transitions.medium};
    &:hover {
        box-shadow: ${p => p.theme.defaultShowBoxShadow && p.theme.boxShadow.bs1};
        transition: box-shadow ${p => p.theme.transitions.medium};
    }
    &:focus {
        box-shadow: ${p => p.theme.defaultShowBoxShadow && p.theme.boxShadow.bs2};
        transition: all ${p => p.theme.transitions.medium};
    }
`;
