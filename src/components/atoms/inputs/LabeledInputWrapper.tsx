import styled from "styled-components";
import { verticalMargin } from "styleConstants";

export const LabeledInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  height: 20px;
  margin: ${verticalMargin.default} 0px;
`;
