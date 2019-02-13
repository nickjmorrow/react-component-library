import * as React from "react";
import { useState, useContext } from "react";
import styled from "styled-components";
import { FileInputProps } from "~/types";
import { UploadIcon } from "../icons/UploadIcon";
import { Typography } from "~/components";
import { getStyles, ThemeContext } from "~/styleConstants";

export const FileInput: React.SFC<FileInputProps> = ({
  initialLabel = "Choose a file",
  onChange: handleChange
}) => {
  const [label, setLabel] = useState(initialLabel);
  const handleChangeInternal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    const newLabel = files && files[0] ? files[0].name : label;
    handleChange(files);
    setLabel(newLabel);
  };
  const theme = useContext(ThemeContext);
  const { borderRadius, boxShadow, colors, transitions } = getStyles(theme);
  return (
    <>
      <StyledFileInput
        type={"file"}
        name="file"
        id="file"
        onChange={handleChangeInternal}
      />
      <Label
        htmlFor="file"
        color={colors.white}
        backgroundColor={colors.primary.main}
        backgroundColorHover={colors.primary.light}
        borderRadius={borderRadius.default}
        boxShadow={boxShadow.default}
        transition={transitions.fast}>
        <UploadIcon style={{ height: "30px", width: "30px" }} />
        <Typography
          variant="button"
          color="inherit"
          style={{ margin: "0", marginLeft: "6px" }}>
          {label}
        </Typography>
      </Label>
    </>
  );
};

const StyledFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

interface DisplayProps {
  backgroundColor: string;
  backgroundColorHover: string;
  borderRadius: string;
  boxShadow: string;
  transition: string;
}

const Label = styled("label")<DisplayProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  display: inline-block;
  padding: 8px 16px;
  width: max-content;
  border-radius: ${props => props.borderRadius};
  cursor: pointer;
  box-shadow: ${props => props.boxShadow};
  transition: background-color ${props => props.transition};
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-color: ${props => props.backgroundColorHover};
  }
`;
