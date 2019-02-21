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
  const { theme } = useContext(ThemeContext);
  const {
    border: { borderRadius },
    boxShadow,
    colors,
    transitions,
    spacing
  } = getStyles(theme);
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
        color={colors.background}
        backgroundColor={colors.core.main}
        backgroundColorHover={colors.core.light}
        borderRadius={borderRadius.default}
        boxShadow={boxShadow.default}
        transition={transitions.fast}
        spacing={spacing}>
        <UploadIcon colorVariant={"primaryLight"} />
        <Typography
          colorVariant="textPrimaryLight"
          weightVariant={2}
          style={{ margin: "0", marginLeft: "6px" }}>
          {label}
        </Typography>
      </Label>
    </>
  );
};

interface DisplayProps {
  backgroundColor: string;
  backgroundColorHover: string;
  borderRadius: string;
  boxShadow: string;
  transition: string;
  spacing: ReturnType<typeof getStyles>["spacing"];
}

const Label = styled("label")<DisplayProps>`
  color: ${props => props.color};
  background-color: ${props => props.backgroundColor};
  display: inline-block;
  padding: ${p => p.spacing[2]} ${p => p.spacing[3]};
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

// TODO: spacing looks kind of weird here, no?
const StyledFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;
