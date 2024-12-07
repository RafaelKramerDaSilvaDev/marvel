import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;

  width: 180px;

  cursor: pointer;
  transition: scale, box-shadow, 0.4s ease-out;

  &:hover {
    scale: 1.1;
    transform: rotate(2deg);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
`;

export const Footer = styled.div`
  display: flex;

  background-color: #ffffff;
  padding: 12px;
`;

export const Span = styled.span`
  font-size: 18px;
  font-weight: 800;

  color: #ee171f;

  text-align: center;
  width: 100%;
`;
