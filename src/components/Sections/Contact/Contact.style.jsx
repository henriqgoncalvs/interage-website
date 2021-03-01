import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  .fp-tableCell {
    /* padding-top: 5vh; */
  }
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;

  transform: translate(-50%, -50%);

  width: 70%;
  height: 70%;

  background: url('/img/logo-interage-circulo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TitleWrapper = styled.div`
  position: relative;
  z-index: 5;
`;

export const Title = styled.h3`
  @media (max-width: 32em) {
    font-size: ${({ theme }) => theme.base.fontMd};
  }
`;

export const FormContainer = styled.div`
  position: relative;
  z-index: 5;
  width: 60%;
  margin: 0 auto;

  @media (max-width: 32em) {
    width: calc(100% - 10rem);
    /* padding-left: 5rem; */
    /* padding-right: 5rem; */
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5rem;
`;

export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  @media (max-width: 32em) {
    flex-direction: column;
  }
`;

export const InputsLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  input {
    padding: 1rem 0.8rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.gothamLight};
    font-size: ${({ theme }) => theme.base.fontMd};

    &::placeholder {
      ${({ theme }) => theme.fonts.gothamLight};
      font-size: ${({ theme }) => theme.base.fontMd};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const InputsRight = styled.div`
  align-self: stretch;

  textarea {
    padding: 1rem 0.8rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.gothamLight};
    font-size: ${({ theme }) => theme.base.fontMd};

    &::placeholder {
      ${({ theme }) => theme.fonts.gothamLight};
      font-size: ${({ theme }) => theme.base.fontMd};
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;
