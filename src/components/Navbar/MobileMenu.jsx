import Link from 'next/link';
import { useRouter } from 'next/router';

import { MobileMenu as Menu } from './Navbar.style';

const MobileMenu = ({ toggleMenu }) => {
  const { pathname } = useRouter();

  return (
    <Menu>
      <Menu.Close onClick={toggleMenu} />
      <Menu.BackgroundImage />
      <Menu.List>
        <Menu.Link active={pathname === '/'} onClick={toggleMenu}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Link>
        <Menu.Link active={pathname === '/sobre'} onClick={toggleMenu}>
          <Link href="/sobre">
            <a>Sobre</a>
          </Link>
        </Menu.Link>
        <Menu.Link active={pathname === '/servicos'} onClick={toggleMenu}>
          <Link href="/servicos">
            <a>Serviços</a>
          </Link>
        </Menu.Link>
        <Menu.Link active={pathname === '/contato'} onClick={toggleMenu}>
          <Link href="/contato">
            <a>Contato</a>
          </Link>
        </Menu.Link>
      </Menu.List>
    </Menu>
  );
};

export default MobileMenu;
