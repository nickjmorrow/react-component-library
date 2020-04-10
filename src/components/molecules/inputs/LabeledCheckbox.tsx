import * as React from 'react';
import styled from 'styled-components';
import { IOption } from 'types';
import { Checkbox, Typography } from '~/components/atoms';
import { useThemeContext } from '~/theming';
import { LabeledInputWrapper } from './LabeledInputWrapper';

export const LabeledCheckbox: React.SFC<{
    isToggled: boolean;
    option: IOption;
    onClick(option: IOption): void;
}> = ({ isToggled, option, onClick: handleClick }) => {
    const handleClickInternal = () => handleClick(option);

    const { colors } = useThemeContext();

    const renderInput = () => (
        <CheckboxWrapper color={isToggled ? colors.core.cs5 : colors.neutral.cs6}>
            <Checkbox fill={isToggled ? colors.core.cs5 : colors.transparent} />
        </CheckboxWrapper>
    );
    const renderLabel = () => <Typography colorVariant={isToggled ? 'core' : 'primaryDark'}>{option.label}</Typography>;
    return <LabeledInputWrapper onClick={handleClickInternal} renderInput={renderInput} renderLabel={renderLabel} />;
};

const WIDTH = 18;

const CheckboxWrapper = styled('div')<{
    color: string;
}>`
    height: ${WIDTH}px;
    width: ${WIDTH}px;
    border: 1px solid ${p => p.theme.njmTheme.colors.core.cs5};
    border-radius: ${p => p.theme.njmTheme.border.borderRadius.br1};
    box-shadow: ${p => p.theme.njmTheme.boxShadow.bs1};
    transition: border ${p => p.theme.njmTheme.transitions.medium};
`;
