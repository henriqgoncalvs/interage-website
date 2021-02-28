import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;

  height: 6vh;
  width: 100%;

  background: ${({ theme }) => theme.colors.primaryDarker};

  display: flex;
  align-items: center;
  justify-content: center;

  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const Nav = styled.div`
  width: calc(100% - 10rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  list-style: none;

  width: fit-content;
  /* min-width: 10rem; */
`;

const NavLink = styled.li`
  display: flex;
  align-items: center;

  a {
    /* ${({ theme }) => theme.fonts.gothamLight} */
    font-size: ${({ theme }) => theme.base.fontXs}!important;
    color: ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.white};

    text-decoration: none !important;
    text-transform: uppercase;

    transition: color 0.1s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryLighter};
    }
  }
`;

Nav.List = NavList;
Nav.Link = NavLink;

export { Container, Nav };
