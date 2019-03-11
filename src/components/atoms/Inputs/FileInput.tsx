import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Typography, Button, UploadIcon, FlexCenterWrapper } from "../../atoms";
import { GetComponentProps } from "../../../typeUtilities";

interface FileInputProps {
  initialLabel?: string;
  onChange(value: FileList | null): void;
}

// TODO: prop to freeze label to just be initial label

export const FileInput: React.SFC<
  FileInputProps & GetComponentProps<typeof Button>
> = ({
  initialLabel = "upload",
  onChange: handleChange,
  textColorVariant = "primaryLight",
  ...buttonProps
}) => {
  const [label, setLabel] = useState(initialLabel);
  const handleChangeInternal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    const newLabel = files && files[0] ? files[0].name : label;
    handleChange(files);
    setLabel(newLabel);
  };

  const labelRef = React.useRef<HTMLLabelElement>(null);

  const handleButtonClick = () => {
    if (labelRef.current) {
      labelRef.current.click();
    }
  };

  return (
    <>
      <StyledFileInput
        type={"file"}
        name="file"
        id="file"
        onChange={handleChangeInternal}
      />
      <label htmlFor="file" ref={labelRef} style={{ width: "0" }}>
        <Button
          onClick={handleButtonClick}
          textColorVariant={textColorVariant}
          {...buttonProps}>
          <FlexCenterWrapper>
            <UploadIcon colorVariant={textColorVariant} sizeVariant={2} />
            <Typography
              colorVariant={textColorVariant}
              weightVariant={2}
              style={{
                margin: "0",
                marginLeft: "6px",
                textTransform: "uppercase"
              }}>
              {label}
            </Typography>
          </FlexCenterWrapper>
        </Button>
      </label>
    </>
  );
};

// TODO: spacing looks kind of weird here, no?
const StyledFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
