import * as React from "react";
import styled from "styled-components";
import { FileInputProps } from "../../../types";
import {
  borderRadius,
  boxShadow,
  colors,
  transitions
} from "../../../styleConstants";
import { UploadIcon } from "../icons/UploadIcon";
import { Typography } from "../Typography";

export class FileInput extends React.Component<
  FileInputProps,
  { label: string }
> {
  readonly state = {
    label: this.props.initialLabel || "Choose a file"
  };

  handleChangeInternal = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.currentTarget;
    const newLabel =
      files && files[0] ? files[0].name : this.props.initialLabel!;
    this.props.onChange(files);
    this.setState({
      label: newLabel
    });
  };

  render() {
    const { label } = this.state;

    return (
      <>
        <StyledFileInput
          type={"file"}
          name="file"
          id="file"
          onChange={this.handleChangeInternal}
        />
        <Label htmlFor="file">
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
  }
}

const StyledFileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const Label = styled.label`
  color: ${colors.white};
  background-color: ${colors.primary};
  display: inline-block;
  padding: 8px 16px;
  width: max-content;
  border-radius: ${borderRadius.default};
  cursor: pointer;
  box-shadow: ${boxShadow.default};
  transition: background-color ${transitions.fast};
  text-transform: uppercase;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:hover {
    background-color: ${colors.primaryLight};
  }
`;
