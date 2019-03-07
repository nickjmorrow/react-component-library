import { StyleConstant } from "react-component-library";
import styled from "styled-components";
export const Block = styled("div")<{
  color: string;
  spacing: StyleConstant<"spacing">;
  borderRadius: StyleConstant<"border">["borderRadius"];
  boxShadow?: StyleConstant<"boxShadow">;
}>`
  width: ${p => p.spacing.ss16};
  height: ${p => p.spacing.ss16};
  margin: ${p => `${p.spacing.ss2} ${p.spacing.ss4} ${p.spacing.ss2} 0`};
  margin: 6px 12px 6px 0;
  border-radius: ${p => p.borderRadius.br1};
  background-color: ${props => props.color};
  box-shadow: ${p => p.boxShadow && p.boxShadow.bs1};
`;
