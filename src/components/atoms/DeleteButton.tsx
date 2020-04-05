import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '~/theming';
import { TrashIcon } from './icons/TrashIcon';
import { StyleConstant } from '../../typeUtilities';

// TODO: do something about this / move it elsewhere / generalize it
export const DeleteButton: React.SFC<{ onClick: () => void }> = ({ onClick: handleClick }) => {
    const {
        colors,
        spacing,
        border: { borderRadius },
        transitions,
    } = React.useContext(ThemeContext);
    return (
        <StyledDeleteButton
            spacing={spacing}
            colors={colors}
            borderRadius={borderRadius}
            transitions={transitions}
            onClick={handleClick}
        >
            <TrashIcon />
        </StyledDeleteButton>
    );
};

interface DisplayProps {
    spacing: StyleConstant<'spacing'>;
    colors: StyleConstant<'colors'>;
    borderRadius: StyleConstant<'border'>['borderRadius'];
    transitions: StyleConstant<'transitions'>;
}

const StyledDeleteButton = styled('div')<DisplayProps>`
    width: ${props => props.spacing.ss2};
    height: ${props => props.spacing.ss2};
    border-radius: ${props => props.borderRadius}px;
    background-color: ${p => p.colors.core.cs7};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;
