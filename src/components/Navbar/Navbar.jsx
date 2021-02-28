import Link from 'next/link';
import { useRouter } from 'next/router';

import Logo from 'components/Logo';

import { Container, Nav } from './Navbar.style';

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      <Nav>
        <Link href="/">
          <a style={{ display: 'flex', alignItems: 'center' }}>
            <Logo />
          </a>
        </Link>
        <Nav.List>
          <Nav.Link active={pathname === '/'}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Nav.Link>
          <Nav.Link active={pathname === '/sobre'}>
            <Link href="/sobre">
              <a>Sobre</a>
            </Link>
          </Nav.Link>
          <Nav.Link active={pathname === '/servicos'}>
            <Link href="/servicos">
              <a>Serviços</a>
            </Link>
          </Nav.Link>
          <Nav.Link active={pathname === '/contato'}>
            <Link href="/contato">
              <a>Contato</a>
            </Link>
          </Nav.Link>
        </Nav.List>
      </Nav>
    </Container>
  );
};

export default Navbar;
