import * as React from 'react';
import styled from 'styled-components';
import { IValue } from '../../../types';

interface IOwnProps {
    value?: IValue;
    placeholder?: string;
    size?: number;
    onBlur?(): void;
    onChange(value: IValue): void;
}

export const InvisibleInput: React.SFC<IOwnProps> = props => {
    const { value, size, placeholder, onBlur, onChange: handleChange } = props;

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === 'Tab') {
            /* tslint:disable-next-line:no-unused-expression */
            onBlur && onBlur();
        }
    };

    const handleChangeInternal = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleChange(event.currentTarget.value);
    };

    return (
        <StyledInvisibleInput
            value={value}
            placeholder={placeholder}
            size={size || 20}
            onBlur={onBlur}
            onChange={handleChangeInternal}
            onKeyUp={handleKeyUp}
        />
    );
};

const StyledInvisibleInput = styled.input`
    outline: none;
    border: none;
    font-size: inherit;
    color: inherit;
    padding: 0px;
    width: 100%;
`;
