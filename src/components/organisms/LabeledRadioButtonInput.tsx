import * as React from 'react';
import { LabeledRadioButton } from './LabeledRadioButton';
import { IOption } from './types';
import { Typography } from './Core/components/atoms/Typography';
import { hasDuplicates } from './Core/services';

export const LabeledRadioButtonInput: React.SFC<IProps> = ({
	options,
	selectedOption,
	name,
	text = '',
	onClick: handleClick
}) => {
	const values = options.map(o => o.value);
	if (hasDuplicates(values)) {
		throw Error(`Labels contains duplicates: ${values}`);
	}

	const handleClickInternal = (option: IOption) => handleClick(option, name);
	return (
		<div>
			<Typography>{text}</Typography>
			{options.map(option => (
				<LabeledRadioButton
					key={option.value}
					option={option}
					isChecked={option === selectedOption}
					onClick={handleClickInternal}
				/>
			))}
		</div>
	);
};

interface IProps {
	options: IOption[];
	selectedOption: IOption;
	name?: string;
	text?: string;
	onClick(option: IOption, name?: string): void;
}
