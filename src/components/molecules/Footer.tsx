import * as React from "react";
import styled from "styled-components";
import { Typography } from "../atoms/Typography";
import { colors } from "../../styleConstants";
import { fullName } from "../../constants";

const currentYear = new Date().getFullYear();
const defaultText = `© ${currentYear} ${fullName}`;

export const Footer: React.SFC<IOwnProps> = ({ text = defaultText, style }) => (
  <StyledFooter style={style}>
    <Typography color="light" style={{ padding: "6px", fontSize: "14px" }}>
      {text}
    </Typography>
  </StyledFooter>
);

const StyledFooter = styled.div`
  margin-top: 24px;
  background-color: ${colors.primary.main};
  display: flex;
  align-items: center;
  padding: 2px;
  width: 100%;
  position: absolute;
  bottom: 0px;
`;

interface IOwnProps {
  text?: string;
  style?: React.CSSProperties;
}
