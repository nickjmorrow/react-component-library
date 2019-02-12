import styled from "styled-components";
import { borderRadius, colors, transitions } from "~/styleConstants";
export const StyledInput = styled.input`
  outline: none;
  width: 15rem;
  padding: 0.5rem;
  background-color: ${colors.lighterGray};
  border-radius: ${borderRadius.inner};
  border: 1px solid ${colors.transparent};
  margin-bottom: 2px;
  font-size: 1rem;
  margin: 4px 0px;
  &:focus {
    border: 1px solid ${colors.primary};
    transition: border ${transitions.medium};
  }
`;
