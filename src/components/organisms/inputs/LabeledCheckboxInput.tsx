import * as React from 'react';
import { hasDuplicates } from 'services';
import { IOption } from '../../../types';
import { LabeledCheckbox } from '../../molecules';
import { LabeledInputsWrapper } from './LabeledInputsWrapper';

export const LabeledCheckboxInput: React.SFC<{
    options: IOption[];
    selectedOptions: IOption[];
    name?: string;
    text?: string;
    onClick(newSelectedOptions: IOption[], name?: string): void;
}> = ({ onClick: handleClick, name, selectedOptions, options, text = '' }) => {
    const handleClickInternal = (selectedOption: IOption) => {
        handleClick(getNewSelectedOptions(selectedOption, selectedOptions), name);
    };

    // TODO: this isn't working as I expect it to :)
    return (
        <LabeledInputsWrapper
            text={text}
            renderInputs={() =>
                options.map(option => (
                    <LabeledCheckbox
                        option={option}
                        key={option.value}
                        isToggled={selectedOptions.some(so => so.value === option.value)}
                        onClick={handleClickInternal}
                    />
                ))
            }
        />
    );
};

const wasAlreadySelected = (selectedOption: IOption, selectedOptions: IOption[]) =>
    selectedOptions.some(so => so.value === selectedOption.value);

const getNewSelectedOptions = (newSelectedOption: IOption, previousSelectedOptions: IOption[]) =>
    wasAlreadySelected(newSelectedOption, previousSelectedOptions)
        ? previousSelectedOptions.filter(so => so.value !== newSelectedOption.value)
        : [...previousSelectedOptions, newSelectedOption];

export const checkArguments = (options: IOption[], selectedOptions: IOption[]) => {
    if (!options || !selectedOptions) {
        return;
    }
    const optionsValues = options.map(o => o.value);
    const selectedOptionsValues = selectedOptions.map(so => so.value);

    if (options.length === 0) {
        throw Error('Parameter options must contain entries but was empty');
    }

    if (hasDuplicates(optionsValues)) {
        throw Error(`Parameter options contains duplicates: ${optionsValues}`);
    }

    if (hasDuplicates(selectedOptionsValues)) {
        throw Error(`Parameter selectedOptions contains duplicates: ${selectedOptionsValues}`);
    }
    if (selectedOptionsValues.filter(sov => optionsValues.indexOf(sov) === -1).length > 0) {
        throw Error(`Parameter selectedOptions is not a subset of options`);
    }
};
