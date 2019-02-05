import * as React from 'react';
import { LabeledCheckbox } from './LabeledCheckbox';
import { IOption } from './types';
import { coreServices, Typography } from './Core';

const { hasDuplicates } = coreServices;

export const LabeledCheckboxInput: React.SFC<IOwnProps> = ({
	onClick: handleClick,
	name,
	selectedOptions,
	options,
	text = ''
}) => {
	checkArguments(options, selectedOptions);

	const handleClickInternal = (selectedOption: IOption) => {
		handleClick(
			getNewSelectedOptions(selectedOption, selectedOptions),
			name
		);
	};

	return (
		<div>
			<Typography>{text}</Typography>
			{options.map(option => (
				<LabeledCheckbox
					option={option}
					key={option.value}
					isToggled={
						selectedOptions.find(
							so => so.value === option.value
						) !== undefined
					}
					onClick={handleClickInternal}
				/>
			))}
		</div>
	);
};

interface IOwnProps {
	options: IOption[];
	selectedOptions: IOption[];
	name?: string;
	text?: string;
	onClick(newSelectedOptions: IOption[], name?: string): void;
}

const wasAlreadySelected = (
	selectedOption: IOption,
	selectedOptions: IOption[]
) => selectedOptions.find(so => so.value === selectedOption.value);

const getNewSelectedOptions = (
	newSelectedOption: IOption,
	previousSelectedOptions: IOption[]
) =>
	wasAlreadySelected(newSelectedOption, previousSelectedOptions)
		? previousSelectedOptions.filter(
				so => so.value !== newSelectedOption.value
		  )
		: [...previousSelectedOptions, newSelectedOption];

export const checkArguments = (
	options: IOption[],
	selectedOptions: IOption[]
) => {
	const optionsValues = options.map(o => o.value);
	const selectedOptionsValues = selectedOptions.map(so => so.value);

	if (options.length === 0) {
		throw Error('Parameter options must contain entries but was empty');
	}

	if (hasDuplicates(optionsValues)) {
		throw Error(`Parameter options contains duplicates: ${optionsValues}`);
	}

	if (hasDuplicates(selectedOptionsValues)) {
		throw Error(
			`Parameter selectedOptions contains duplicates: ${selectedOptionsValues}`
		);
	}
	if (
		selectedOptionsValues.filter(sov => optionsValues.indexOf(sov) === -1)
			.length > 0
	) {
		throw Error(`Parameter selectedOptions is not a subset of options`);
	}
};
