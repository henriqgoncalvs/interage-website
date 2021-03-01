import styled from 'styled-components';
import { CgMenu } from 'react-icons/cg';
import { GrClose } from 'react-icons/gr';

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

  @media (max-width: 32em) {
    display: none;
  }
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

const NavMenu = styled(CgMenu)`
  display: none;

  height: 5rem;
  width: 5rem;

  @media (max-width: 32em) {
    display: initial;
  }
`;

Nav.List = NavList;
Nav.Link = NavLink;
Nav.Menu = NavMenu;

const MobileMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;

  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 3rem 1rem;

  background: ${({ theme }) => theme.colors.black};
`;

const MobileMenuList = styled.ul`
  position: relative;
  z-index: 10;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 6rem;

  list-style: none;
`;

const MobileMenuLink = styled.li`
  display: flex;
  align-items: center;

  a {
    ${({ theme }) => theme.fonts.gothamBold}
    font-size: ${({ theme }) => theme.base.fontXl}!important;
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

const MobileMenuSocial = styled.ul`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 3rem;

  list-style: none;
`;

const MobileMenuSocialItem = styled.li`
  display: flex;
  align-items: center;

  a {
    /* ${({ theme }) => theme.fonts.gothamLight} */
    font-size: ${({ theme }) => theme.base.fontXs}!important;
    color: ${({ theme }) => theme.colors.white};

    text-decoration: none !important;
    text-transform: uppercase;

    transition: color 0.1s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.primaryLighter};
    }
  }
`;

const MobileMenuClose = styled(GrClose)`
  position: absolute;
  top: 3rem;
  right: 7rem;
  z-index: 100;

  width: 5rem;
  height: 5rem;

  path {
    fill: ${({ theme }) => theme.colors.white};
    stroke: ${({ theme }) => theme.colors.white};
  }
`;

export const MobileMenuBackgroundImage = styled.div`
  position: absolute;
  top: 30%;
  left: 50%;
  z-index: 1;

  transform: translate(-51%, -50%);

  width: 80%;
  height: 70%;

  background: url('/img/logo-interage-circulo.png');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

MobileMenu.List = MobileMenuList;
MobileMenu.Link = MobileMenuLink;
MobileMenu.Social = MobileMenuSocial;
MobileMenu.SocialItem = MobileMenuSocialItem;
MobileMenu.Close = MobileMenuClose;
MobileMenu.BackgroundImage = MobileMenuBackgroundImage;

export { Container, Nav, MobileMenu };
