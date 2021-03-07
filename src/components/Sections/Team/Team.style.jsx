import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.primaryLighter};
  color: ${({ theme }) => theme.colors.primaryDarker};

  .fp-tableCell {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 64em) {
      flex-direction: column;
    }
  }
`;

export const ImageContainer = styled.div`
  flex: 60%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 5rem;
  padding-right: 5rem;

  @media (max-width: 64em) {
    padding-top: 8vh;
    padding-bottom: 0;
    flex: 40%;
  }
`;

export const ContentContainer = styled.div`
  flex: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding-right: 5rem;

  h3 {
    font-size: ${({ theme }) => theme.base.font2Xl};
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  @media (max-width: 32em) {
    h3 {
      font-size: ${({ theme }) => theme.base.fontXl};
    }
  }

  @media (max-width: 64em) {
    justify-content: flex-start;
    text-align: center;
    padding-left: 5rem;
  }
`;

export const TextContent = styled.div``;

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
    bottom: 5vh;
  }
`;
