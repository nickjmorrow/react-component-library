import * as React from 'react';
import { LabeledRadioButton } from '~/components/molecules';
import { IOption } from '~/types';
import { LabeledInputsWrapper } from '~/components/organisms/inputs/LabeledInputsWrapper';

export const LabeledRadioButtonInput: React.SFC<{
    options: IOption[];
    selectedOption: IOption;
    name?: string;
    text?: string;
    onClick(option: IOption, name?: string): void;
}> = ({ options, selectedOption, name, text = '', onClick: handleClick }) => {
    const handleClickInternal = (option: IOption) => handleClick(option, name);
    return (
        <LabeledInputsWrapper
            text={text}
            renderInputs={() =>
                options.map(option => (
                    <LabeledRadioButton
                        option={option}
                        key={option.value}
                        isChecked={option.value === selectedOption.value}
                        onClick={handleClickInternal}
                    />
                ))
            }
        />
    );
};
