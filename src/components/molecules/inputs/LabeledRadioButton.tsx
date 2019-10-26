import * as React from 'react';
import styled from 'styled-components';
import { ThemeContext } from '../../../styleConstants';
import { IOption } from '../../../types';
import { StyleConstant } from '../../../typeUtilities';
import { Typography } from '../../atoms/typography/Typography';
import { LabeledInputWrapper } from './LabeledInputWrapper';

export const LabeledRadioButton: React.SFC<IProps> = ({ option, isChecked, onClick: handleClick }) => {
    const handleClickInternal = () => {
        handleClick(option);
    };
    const { boxShadow, colors, transitions } = React.useContext(ThemeContext);

    const renderInput = () => (
        <RadioButton isChecked={isChecked} boxShadow={boxShadow} colors={colors} transitions={transitions} />
    );

    const renderLabel = () => <Typography colorVariant={isChecked ? 'core' : 'primaryDark'}>{option.label}</Typography>;
    return <LabeledInputWrapper onClick={handleClickInternal} renderInput={renderInput} renderLabel={renderLabel} />;
};

const length = 14;
const RadioButton = styled('div')<IRadioButtonProps>`
    width: ${length}px;
    height: ${length}px;
    border-radius: ${length}px;
    border: 1px solid ${props => (props.isChecked ? props.colors.core.cs5 : props.colors.neutral.cs6)};
    box-shadow: ${p => p.boxShadow.bs1};
    background-color: ${props => (props.isChecked ? props.colors.core.cs5 : props.colors.transparent)};
    transition: background-color ${p => p.transitions.medium} ease-in-out;
`;

interface IRadioButtonProps {
    isChecked: boolean;
    colors: StyleConstant<'colors'>;
    transitions: StyleConstant<'transitions'>;
    boxShadow: StyleConstant<'boxShadow'>;
}

interface IProps {
    option: IOption;
    isChecked: boolean;
    onClick(option: IOption): void;
}
