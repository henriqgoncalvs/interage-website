import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;

  background: ${({ theme }) => theme.colors.black};

  display: flex;
  align-items: center;

  padding: 5rem;

  .fp-tableCell {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    height: 100%;
  }

  @media (max-width: 64em) {
    padding-top: 15rem;
  }
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1.3rem;

  color: ${({ theme }) => theme.colors.white};
`;

export const InfoTilte = styled.h3`
  ${({ theme }) => theme.fonts.gotham}
  font-size: 2rem;
  text-transform: uppercase;
`;

export const InfoLink = styled.a`
  ${({ theme }) => theme.fonts.gothamLight}
  font-size: 1.5rem;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 1rem;
  }
`;

export const StyledLogo = styled.div`
  position: absolute;
  top: 3rem;
  right: 5rem;
`;

export const StyledLogoCircle = styled.div`
  position: absolute;
  top: 3rem;
  left: 5rem;
`;
