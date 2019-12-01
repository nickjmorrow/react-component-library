import * as React from 'react';
import { useState } from 'react';
import { TextInput, EyeIcon } from '~/components/atoms';

export const PasswordInput: React.SFC<
    { errors?: string[] } & React.PropsWithoutRef<JSX.IntrinsicElements['input']>
> = ({
    placeholder = 'Password',
    errors = [],
    value,
    onChange: handleChange = () => {
        return;
    },
    ...props
}) => {
    const [inputType, setInputType] = useState<'text' | 'password'>('password');
    const showPassword = inputType === 'text';

    const toggleInputType = () => setInputType(inputType === 'text' ? 'password' : 'text');

    const handleChangeInternal = (e: React.ChangeEvent<HTMLInputElement>) => handleChange(e);

    return (
        <div
            style={{
                display: 'flex',
                height: 'min-content',
                flexDirection: 'column',
                position: 'relative',
            }}
        >
            <TextInput
                value={value}
                onChange={handleChangeInternal}
                type={inputType}
                placeholder={placeholder}
                errors={errors}
                {...props}
            />
            <EyeIcon
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '12px',
                }}
                colorVariant={showPassword ? 'primaryDark' : 'secondaryDark'}
                sizeVariant={2}
                onClick={toggleInputType}
            />
        </div>
    );
};
