import * as React from 'react';
import {
    TextInput,
    PasswordInput,
    Button,
    Typography,
    AutocompleteTextInput,
} from '@nickjmorrow/react-component-library';
import { DisplayPaper } from '../DisplayPaper';
import styled from 'styled-components';

const possibleValues = ['h', 'he', 'hell', 'help', 'helper', 'hello'];

export const TextInputDemo: React.SFC = () => {
    const [value, setValue] = React.useState('');
    const [autocompleteValue, setAutocompleteValue] = React.useState('');
    const [otherValue, setOtherValue] = React.useState('');
    const twoErrors = ['Please enter a valid email address.', 'Something else related to the email address.'];
    const noErrors = [] as string[];
    const oneError = ['Some other email error'];

    const errorSequence = [noErrors, oneError, twoErrors, oneError];
    const [pointer, setPointer] = React.useState(0);

    const getNewErrors = () => {
        if (pointer === errorSequence.length - 1) {
            setPointer(0);
        } else {
            setPointer(prevPointer => prevPointer + 1);
        }
    };

    const toggleErrors = () => getNewErrors();

    const style = {
        flexDirection: 'column' as 'column',
        alignItems: 'flex-start',
    };
    return (
        <>
            <Typography styleVariant={'h1'}>Text Input</Typography>
            <Typography>An atomic component that allows for inputting text.</Typography>
            <Typography styleVariant={'h2'}>Versions</Typography>
            <Typography styleVariant={'h3'}>Base</Typography>
            <DisplayPaper>
                <TextInput
                    value={otherValue}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtherValue(e.currentTarget.value)}
                />
            </DisplayPaper>
            <Typography styleVariant={'h3'}>Password Input</Typography>
            <DisplayPaper>
                <PasswordInput value={value} onChange={e => setValue(e.currentTarget.value)} />
            </DisplayPaper>
            <Typography styleVariant={'h3'}>Autocomplete</Typography>
            <DisplayPaper>
                <AutocompleteTextInput
                    value={autocompleteValue}
                    setValue={(value: string) => setAutocompleteValue(value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAutocompleteValue(e.currentTarget.value)}
                    possibleValues={possibleValues}
                />
            </DisplayPaper>
            <Typography styleVariant={'h2'}>Props</Typography>
            <Typography styleVariant={'h3'}>Label</Typography>
            <DisplayPaper>
                <TextInput
                    value={otherValue}
                    label={'A short label'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtherValue(e.currentTarget.value)}
                />
            </DisplayPaper>
            <Typography styleVariant={'h3'}>Placeholder</Typography>
            <DisplayPaper>
                <TextInput
                    value={otherValue}
                    placeholder={'A short placeholder'}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setOtherValue(e.currentTarget.value)}
                />
            </DisplayPaper>
            <Typography styleVariant={'h3'}>Errors</Typography>
            <DisplayPaper style={style}>
                <InputsWrapper>
                    <TextInput
                        value={value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value)}
                        errors={errorSequence[pointer]}
                    />
                </InputsWrapper>
                <Button onClick={toggleErrors} useMargin={false}>
                    Toggle Errors
                </Button>
            </DisplayPaper>
        </>
    );
};

const InputsWrapper = styled.div`
    margin-bottom: 24px;
    display: grid;
    grid-auto-flow: row;
    grid-row-gap: 16px;
`;
