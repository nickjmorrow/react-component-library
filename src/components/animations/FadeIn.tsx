import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";

const fadeInAnimation = keyframes`${fadeIn}`;

export const FadeIn = styled("div")<{ duration: string }>`
  animation: ${p => p.duration} ${fadeInAnimation};
`;
