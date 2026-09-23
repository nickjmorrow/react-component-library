import styled from 'styled-components';
import { shouldForwardProp } from '~/styled';

// TODO: should be a styleVariant of Link.tsx
export const InvisibleLink = styled.a.withConfig({ shouldForwardProp })`
    text-decoration: none;
    &:visited,
    &:active,
    &:focus,
    &:hover {
        color: inherit;
    }
`;
