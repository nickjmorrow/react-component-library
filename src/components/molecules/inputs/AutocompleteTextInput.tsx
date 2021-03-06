import { Trie } from '~/components/molecules/utilities/Trie';
import * as React from 'react';
import { StyledOptionList } from '~/components/molecules';
import { Option } from '~/components/molecules/select/Option';
import { useThemeContext } from '~/theming';
import { TextInput } from '~/components/atoms/inputs/textInputs';

export const AutocompleteTextInput: React.SFC<
    {
        style?: React.CSSProperties;
        errors?: string[];
        possibleValues?: string[];
        numEligibleValues?: number;
        setValue?: (newValue: string) => void;
        onChange: (event: React.FormEvent<HTMLInputElement>) => void;
        value: string;
    } & React.HTMLProps<HTMLInputElement>
> = ({
    placeholder,
    errors = [],
    style,
    possibleValues = [],
    numEligibleValues = 3,
    value = '',
    setValue = () => {
        return;
    },
    onChange: handleChange,
    ...props
}) => {
    const [showMenu, setShowMenu] = React.useState(true);
    const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(e);
        if (!showMenu) {
            setShowMenu(true);
        }
    };
    const [trie] = React.useState(new Trie());
    trie.addWordsToTrie(possibleValues);
    const eligibleWords = trie.getEligibleWords(value.toString());

    const shouldShowEligibleWords = value.length > 0;

    const { spacing } = useThemeContext();

    return (
        <div
            style={{
                height: 'min-content',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            <TextInput
                onChange={handleChangeInternal}
                type={'text'}
                errors={errors}
                placeholder={placeholder}
                style={style}
                value={value}
                {...props}
            />
            <StyledOptionList
                styleApi={{ collapse: { position: 'absolute', top: '48px' } }}
                isMenuVisible={shouldShowEligibleWords && showMenu}
                style={{ top: '53px', minWidth: spacing.ss48 }}
            >
                {eligibleWords
                    .filter((e, i) => i < numEligibleValues)
                    .map(ew => (
                        <Option
                            key={ew}
                            option={{ value: ew, label: ew }}
                            onClick={e => {
                                setValue(ew);
                                setShowMenu(false);
                            }}
                        />
                    ))}
            </StyledOptionList>
        </div>
    );
};
