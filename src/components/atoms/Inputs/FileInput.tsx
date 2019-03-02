import * as React from "react";
import { useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Button,
  UploadIcon,
  FlexCenterWrapper
} from "~/components/atoms";
import { GetComponentProps } from "~/typeUtilities";

interface FileInputProps {
  initialLabel?: string;
  onChange(value: FileList | null): void;
}

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
      <label htmlFor="file" ref={labelRef}>
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

// const Label = styled("label")<{ for: string }>`
//   display: inline-block;
//   width: max-content;
//   cursor: pointer;
// `;

// const Label = styled("label")<DisplayProps>`
//   color: ${props => props.color};
//   background-color: ${props => props.backgroundColor};
//   display: inline-block;
//   padding: ${p => p.spacing.ss2} ${p => p.spacing.ss3};
//   width: max-content;
//   border-radius: ${props => props.borderRadius};
//   cursor: pointer;
//   box-shadow: ${props => props.boxShadow};
//   transition: background-color ${props => props.transition};
//   text-transform: uppercase;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   &:hover {
//     background-color: ${props => props.backgroundColorHover};
//   }
// `;

// TODO: spacing looks kind of weird here, no?
const StyledFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
