import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import Logo from 'components/Logo';

import MobileMenu from './MobileMenu';

import { Container, Nav } from './Navbar.style';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname, locale } = useRouter();
  const { t } = useTranslation('navbar');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
              <a>{t('home')}</a>
            </Link>
          </Nav.Link>
          <Nav.Link active={pathname === '/sobre'}>
            <Link href="/sobre">
              <a>{t('about')}</a>
            </Link>
          </Nav.Link>
          <Nav.Link active={pathname === '/servicos'}>
            <Link href="/servicos">
              <a>{t('services')}</a>
            </Link>
          </Nav.Link>
          <Nav.Link active={pathname === '/contato'}>
            <Link href="/contato">
              <a>{t('contact')}</a>
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link href="/" locale={locale === 'pt' ? 'en' : 'pt'}>
              <a>
                {locale === 'pt' ? (
                  <Image
                    src="/img/usa-flag.png"
                    objectFit="contain"
                    objectPosition="center"
                    width={30}
                    height={30}
                  />
                ) : (
                  <Image
                    src="/img/brazil-flag.png"
                    objectFit="contain"
                    objectPosition="center"
                    width={30}
                    height={30}
                  />
                )}
              </a>
            </Link>
          </Nav.Link>
        </Nav.List>

        <Nav.Menu onClick={() => toggleMenu()} />

        {menuOpen && <MobileMenu toggleMenu={toggleMenu} />}
      </Nav>
    </Container>
  );
};

export default Navbar;
