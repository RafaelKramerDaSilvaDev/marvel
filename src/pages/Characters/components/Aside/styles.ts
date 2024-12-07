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

  border-left: 12px;
  border-right: 12px;
  border-style: solid;
  border-color: #ffffff;

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
