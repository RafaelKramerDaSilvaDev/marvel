import styled, { css, keyframes } from "styled-components";

const slide = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;

export const Aside = styled.aside`
  position: relative;

  background-color: #ee171f;

  height: 100%;

  padding: 16px;

  user-select: none;
`;

export const CarouselTrack = styled.div<{ $timer: number }>`
  display: flex;
  flex-direction: column;
  gap: 16px;

  animation: ${({ $timer }) =>
    css`
      ${slide} ${$timer}s linear infinite
    `};
`;
