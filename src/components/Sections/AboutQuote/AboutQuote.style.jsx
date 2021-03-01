import styled, { css } from 'styled-components';

export const Container = styled.div`
  .fp-tableCell {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 64em) {
      flex-direction: column;
    }
  }
`;

export const LeftBox = styled.div`
  flex: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 5rem;
  padding-right: 5rem;

  background: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.fonts.gothamBold}

  span:first-child {
    display: inline-block;
    font-size: 10rem;
  }

  span:last-child {
    font-size: ${({ theme }) => theme.base.font2Xl};
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 32em) {
    span:first-child {
      font-size: 8rem;
    }

    span:last-child {
      font-size: ${({ theme }) => theme.base.fontXl};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const RightBox = styled.div`
  flex: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  padding-left: 5rem;
  padding-right: 5rem;

  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.fonts.gothamBold}

  span:first-child {
    font-size: ${({ theme }) => theme.base.font2Xl};
    color: ${({ theme }) => theme.colors.primary};
  }

  span:last-child {
    display: inline-flex;
    font-size: 10rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 32em) {
    span:first-child {
      font-size: ${({ theme }) => theme.base.fontXl};
    }

    span:last-child {
      font-size: 8rem;
    }
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
