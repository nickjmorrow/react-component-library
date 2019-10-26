import * as React from 'react';
import styled from 'styled-components';
import { StyleConstant } from '~/index';
import { useThemeContext } from '~/styleConstants';
import { getBorderColor } from './selectUtilities';

export const StyledSelect: React.FC<Props> = ({ isMenuVisible, hasError, children, ...props }) => {
    const { colors, spacing, border, transitions, boxShadow } = useThemeContext();

    return (
        <StyledSelectInternal
            colors={colors}
            spacing={spacing}
            border={border}
            transitions={transitions}
            boxShadow={boxShadow}
            isMenuVisible={isMenuVisible}
            hasError={hasError}
            {...props}
        >
            {children}
        </StyledSelectInternal>
    );
};

const StyledSelectInternal = styled('div')<
    {
        colors: StyleConstant<'colors'>;
        spacing: StyleConstant<'spacing'>;
        border: StyleConstant<'border'>;
        transitions: StyleConstant<'transitions'>;
        boxShadow: StyleConstant<'boxShadow'>;
    } & Props
>`
    border: none;
    outline: none;
    appearance: none;
    text-indent: 1px;
    margin-bottom: ${p => p.spacing.ss1};
    padding: ${p => p.spacing.ss2};
    border-bottom: ${p =>
        `${p.border.borderStyle.bs2} ${getBorderColor(p.isMenuVisible, p.colors, 'normal', p.hasError)}`};
    transition: border-bottom ${p => p.transitions.medium};

    overflow-y: scroll;
    &:hover {
        border-bottom: ${p =>
            `${p.border.borderStyle.bs2} ${getBorderColor(p.isMenuVisible, p.colors, 'hover', p.hasError)}`};
        transition: border-bottom ${p => p.transitions.medium};
        cursor: pointer;
    }
    &:focus,
    &:active {
        border-bottom: ${p => p.border.borderStyle.bs2}
            ${p => getBorderColor(p.isMenuVisible, p.colors, 'active', p.hasError)};
        transition: border-bottom ${p => p.transitions.medium};
    }
`;

type Props = {
    isMenuVisible: boolean;
    hasError: boolean;
    children: React.ReactNode;
} & React.PropsWithoutRef<JSX.IntrinsicElements['div']>;
