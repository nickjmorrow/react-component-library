import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { GetComponentProps } from '../../../typeUtilities';
import { Button, Typography, UploadIcon } from '../../atoms';

interface FileInputProps {
    id?: string;
    initialLabel?: string;
    labelOnUpload?: string;
    onChange(value: FileList | null): void;
}

export const FileInput: React.SFC<FileInputProps & GetComponentProps<typeof Button>> = ({
    initialLabel = 'upload',
    labelOnUpload,
    onChange: handleChange,
    id = 'file',
    textColorVariant = 'primaryLight',
    ...buttonProps
}) => {
    const [label, setLabel] = useState(initialLabel);
    const handleChangeInternal = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.currentTarget;
        const newLabel = files && files[0] ? files[0].name : label;
        handleChange(files);
        setLabel(labelOnUpload || newLabel);
    };

    const labelRef = React.useRef<HTMLLabelElement>(null);

    const handleButtonClick = () => {
        if (labelRef.current) {
            labelRef.current.click();
        }
    };

    return (
        <div>
            <StyledFileInput type={'file'} name={id} id={id} onChange={handleChangeInternal} />
            <label htmlFor={id} ref={labelRef} style={{ margin: 0, display: 'inline-block' }}>
                <Button onClick={handleButtonClick} textColorVariant={textColorVariant} {...buttonProps}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <UploadIcon colorVariant={'inherit'} sizeVariant={2} />
                        <Typography
                            colorVariant={'inherit'}
                            weightVariant={5}
                            style={{
                                margin: '0',
                                marginLeft: '6px',
                                textTransform: 'uppercase',
                            }}
                        >
                            {label}
                        </Typography>
                    </div>
                </Button>
            </label>
        </div>
    );
};

// TODO: spacing looks kind of weird here, no?
const StyledFileInput = styled.input`
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    z-index: -1;
`;
