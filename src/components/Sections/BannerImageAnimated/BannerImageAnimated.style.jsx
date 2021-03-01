import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  overflow: hidden;

  background: url(${({ imgSrc }) => imgSrc});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  text-align: left;

  .fp-scroller {
    height: 100%;
  }
`;

export const ContentSlider = styled(motion.div)`
  position: relative;

  width: 55%;
  height: 100%;

  padding-top: 2rem;
  padding-bottom: 2rem;
  display: flex;
  align-items: center;

  ${({ direction }) => {
    if (direction === 'finish') {
      return css`
        margin-left: auto;
        justify-content: flex-end;
        padding-left: 10rem;
        padding-right: 4rem;
      `;
    }

    return css`
      margin-right: auto;
      justify-content: flex-start;
      padding-left: 5rem;
      padding-right: 4rem;
    `;
  }}

  @media(max-width: 64em) {
    width: 100vw;
    height: 55%;

    ${({ direction }) => direction === 'finish' && 'padding-left: 0'};
  }
`;

export const ContentWrapper = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  color: ${({ color, theme }) => theme.colors[color]};

  z-index: 2;

  width: 80%;

  @media (max-width: 64em) {
    align-self: flex-start;
    /* padding-top: 10vh; */
    padding-right: 5rem;

    button {
      margin-bottom: 3vh;
    }
  }
`;

export const ShapeBackground = styled(motion.div)`
  width: 120%;
  height: 140%;

  position: absolute;
  z-index: 1;

  background: ${({ theme, bgColor }) => theme.colors[bgColor]};

  ${({ direction }) => {
    if (direction === 'finish') {
      return css`
        right: -35%;
        top: -15%;
        transform: rotate(20deg);
      `;
    }

    return css`
      left: -35%;
      top: -15%;
      transform: rotate(-20deg);
    `;
  }}

  @media(max-width: 64em) {
    width: 220%;
    height: 140%;

    ${({ direction }) => {
      if (direction === 'finish') {
        return css`
          right: -60%;
          top: -60% !important;
          transform: rotate(20deg);
        `;
      }

      return css`
        left: -60%;
        top: -60% !important;
        transform: rotate(-20deg);
      `;
    }}
  }
`;

export const ArrowIcon = styled.button`
  position: absolute;
  bottom: 15vh;

  ${({ direction }) => {
    if (direction === 'finish')
      return css`
        right: 5rem;
      `;

    return css`
      left: 5rem;
    `;
  }}

  z-index: 100;

  max-height: fit-content;

  background: transparent;
  border: none;

  ${({ isLastPage }) => isLastPage && 'transform: rotate(180deg);'}

  svg {
    width: 100%;
    height: 100%;
    max-width: 4rem;
    fill: ${({ iconColor, theme }) => theme.colors[iconColor]};
  }

  @media (max-width: 64em) {
    bottom: 10vh;
  }
`;
