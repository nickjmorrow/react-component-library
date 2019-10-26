import styled from 'styled-components';
import * as React from 'react';
import { ThemeContext } from '../../../styleConstants';
import { StyleConstant } from '../../../typeUtilities';

interface IProps {
    isToggled: boolean;
    onClick: (isChecked: boolean) => void;
}

export const Toggle: React.SFC<IProps> = ({ isToggled, onClick: handleClick }) => {
    const { colors, transitions } = React.useContext(ThemeContext);
    const handleClickInternal = () => handleClick(isToggled);

    return (
        <Wrapper onClick={handleClickInternal} colors={colors} transitions={transitions}>
            <Switch isToggled={isToggled} colors={colors} transitions={transitions} />
        </Wrapper>
    );
};

const width = 40;
const height = 20;

const Wrapper = styled('div')<{
    colors: StyleConstant<'colors'>;
    transitions: StyleConstant<'transitions'>;
}>`
    height: ${height}px;
    width: ${width}px;
    background-color: ${p => p.colors.core.cs5};
    cursor: pointer;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0px 4px;
    box-shadow: ${p => p.colors.neutral.cs6} 0px 1px 2px -1px;
    &:hover {
        background-color: ${p => p.colors.core.cs3};
        transition: ${p => p.transitions.fast};
    }
`;

const Switch = styled('div')<{
    isToggled: boolean;
    colors: StyleConstant<'colors'>;
    transitions: StyleConstant<'transitions'>;
}>`
    position: relative;
    height: ${height - 5}px;
    width: ${width / 2}px;
    left: -2px;
    border-radius: ${height}px;
    transform: ${props => `translateX(${props.isToggled ? '120%' : '0%'})`};
    background-color: ${p => p.colors.neutral.cs3};
    transition: transform ${p => p.transitions.fast} ease-in-out;
    box-shadow: ${p => p.colors.neutral.cs6} 1px 0px 2px -1px, ${p => p.colors.neutral.cs6} -1px 0px 2px -1px,
        ${p => p.colors.neutral.cs6} 0px 1px 2px -1px, ${p => p.colors.neutral.cs6} 0px -1px 2px -1px;
    &:hover {
        background-color: ${p => p.colors.neutral.cs3};
    }
`;
