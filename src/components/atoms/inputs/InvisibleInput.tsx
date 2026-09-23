import * as React from 'react';
import styled from 'styled-components';
import { Value } from '../../../types';
import { shouldForwardProp } from '~/styled';

interface IOwnProps {
    value?: Value;
    placeholder?: string;
    size?: number;
    onBlur?(): void;
    onChange(value: Value): void;
}

export const InvisibleInput: React.FC<IOwnProps> = props => {
    const { value, size, placeholder, onBlur, onChange: handleChange } = props;

    const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' || event.key === 'Tab') {
            onBlur?.();
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

const StyledInvisibleInput = styled.input.withConfig({ shouldForwardProp })`
    outline: none;
    border: none;
    font-size: inherit;
    color: inherit;
    padding: 0px;
    width: 100%;
`;
