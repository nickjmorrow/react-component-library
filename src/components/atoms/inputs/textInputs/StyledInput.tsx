import * as React from 'react';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { useThemeContext } from '../../../../styleConstants';
import { StyleConstant } from '../../../../typeUtilities';
import { Fade } from '../../../animations';
import { Typography } from '../../typography';

export const StyledInput: React.SFC<{ errors: string[] } & React.HTMLProps<HTMLInputElement>> = ({
    errors = [],
    ...props
}) => {
    const {
        colors,
        transitions,
        border: { borderRadius, borderStyle },
        spacing,
        boxShadow,
        defaultShowBoxShadow,
        typography: { fontFamily, fontSizes, fontWeights },
    } = useThemeContext();

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
            <Typography sizeVariant={1} colorVariant={'danger'} style={{ marginTop: spacing.ss1 }}>
                {error}
            </Typography>
        </Fade>
    );

    // TODO: Figure out the types for this
    const input = (
        // @ts-ignore
        <Input
            defaultShowBoxShadow={defaultShowBoxShadow}
            boxShadow={boxShadow}
            colors={colors}
            hasErrors={errors.length > 0}
            spacing={spacing}
            fontSize={fontSizes.fs3}
            fontFamily={fontFamily.default}
            fontWeights={fontWeights}
            transition={transitions.medium}
            borderRadius={borderRadius.br1}
            borderStyle={borderStyle.bs1}
            {...props}
        />
    );

    return (
        <>
            {input}
            <FlexColumn>
                <TransitionGroup>{errors.map(renderErrors)}</TransitionGroup>
            </FlexColumn>
        </>
    );
};

const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled('input')<DisplayProps>`
    outline: none;
    width: ${p => p.spacing.ss64};
    padding: ${p => p.spacing.ss3};
    background-color: ${p => p.colors.neutral.cs2};
    border-radius: ${p => p.borderRadius};
    border: ${p => p.borderStyle} ${p => p.colors.transparent};
    border-left-width: ${p => (p.hasErrors ? '2px' : p.borderStyle)};
    border-left-color: ${p => (p.hasErrors ? p.colors.danger.cs3 : p.colors.transparent)};
    type: ${p => p.type};
    font-weight: ${p => p.fontWeights.fw4};
    font-family: ${p => p.fontFamily};
    font-size: ${p => p.fontSize};
    box-sizing: border-box;
    transition: box-shadow ${p => p.transition}, border-left-color ${p => p.transition};
    &:hover {
        box-shadow: ${p => p.defaultShowBoxShadow && p.boxShadow.bs1};
        transition: box-shadow ${p => p.transition};
    }
    &:focus {
        box-shadow: ${p => p.defaultShowBoxShadow && p.boxShadow.bs2};
        transition: all ${p => p.transition};
    }
`;

type InputTypes = 'text' | 'password';

interface DisplayProps {
    borderRadius: string;
    transition: string;
    borderStyle: string;
    fontSize: string;
    fontFamily: string;
    fontWeights: StyleConstant<'typography'>['fontWeights'];
    boxShadow: StyleConstant<'boxShadow'>;
    spacing: StyleConstant<'spacing'>;
    hasErrors: boolean;
    colors: StyleConstant<'colors'>;
    defaultShowBoxShadow: boolean;
}
