import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

import { MobileMenu as Menu } from './Navbar.style';

const MobileMenu = ({ toggleMenu }) => {
  const { t } = useTranslation('navbar');
  const { pathname, locale } = useRouter();

  return (
    <Menu>
      <Menu.Close onClick={toggleMenu} />
      <Menu.BackgroundImage />
      <Menu.List>
        <Menu.Link active={pathname === '/'} onClick={toggleMenu}>
          <Link href="/">
            <a>{t('home')}</a>
          </Link>
        </Menu.Link>
        <Menu.Link active={pathname === '/sobre'} onClick={toggleMenu}>
          <Link href="/sobre">
            <a>{t('about')}</a>
          </Link>
        </Menu.Link>
        <Menu.Link active={pathname === '/servicos'} onClick={toggleMenu}>
          <Link href="/servicos">
            <a>{t('services')}</a>
          </Link>
        </Menu.Link>
        <Menu.Link active={pathname === '/contato'} onClick={toggleMenu}>
          <Link href="/contato">
            <a>{t('contact')}</a>
          </Link>
        </Menu.Link>
        <Menu.Link active={pathname === '/contato'} onClick={toggleMenu}>
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
        </Menu.Link>
      </Menu.List>
    </Menu>
  );
};

export default MobileMenu;
