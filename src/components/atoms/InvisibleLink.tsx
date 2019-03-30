import styled from "styled-components";

// TODO: should be a styleVariant of Link.tsx
export const InvisibleLink = styled.a`
  &:visited,
  &:active,
  &:focus,
  &:hover {
    color: inherit;
  }
`;
