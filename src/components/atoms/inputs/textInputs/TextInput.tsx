import * as React from 'react';
import { StyledInput } from './StyledInput';
import { TextInputProps } from './types';
import { Trie } from '@nickjmorrow/algorithms';
import { StyledOptionList } from '~/components/molecules';
import { Option } from '~/components/molecules/select/Option';
import { useThemeContext } from '~/styleConstants';
import { InputHTMLAttributes } from 'react';

export const TextInput: React.SFC<{
	style?: React.CSSProperties;
	errors?: string[];
	possibleValues?: string[];
	numEligibleValues?: number;
	value: string;
  } & React.PropsWithoutRef<JSX.IntrinsicElements["input"]>> = ({
	placeholder,
	errors = [],
	style,
	possibleValues,
	numEligibleValues = 3,
	value = '',
	onChange : handleChange = () => { return; },
	...props
}) => {
	const [showMenu, setShowMenu] = React.useState(true);
	const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		if (!showMenu) {
			setShowMenu(true);
		}
	};

	const inputRef = React.useRef<HTMLInputElement>(null);

	const [trie] = React.useState(new Trie(possibleValues));
	const eligibleWords = trie.getEligibleWords(value.toString());

	const shouldShowEligibleWords = value.length > 0;

	const { spacing } = useThemeContext();

	const setValue = (newValue: string) => {
		inputRef.current!.value = newValue;
	}

	

	return (
		<div
			style={{
				height: 'min-content',
				display: 'flex',
				flexDirection: 'column',
				position: 'relative',
			}}
		>
			<StyledInput
				onChange={handleChangeInternal}
				type={'text'}
				errors={errors}
				placeholder={placeholder}
				style={style}
				ref={inputRef}
				{...props}
			/>
			{shouldShowEligibleWords && showMenu && (
				<StyledOptionList style={{ top: '53px', minWidth: spacing.ss48 }}>
					{eligibleWords
						.filter((e, i) => i < numEligibleValues)
						.map(ew => (
							<Option
								key={ew}
								option={{ value: ew, label: ew }}
								onClick={(e) => {
									setValue(ew);
									setShowMenu(false);
								}}
							/>
						))}
				</StyledOptionList>
			)}
		</div>
	);
};
