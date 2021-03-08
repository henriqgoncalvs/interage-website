import { IoLocationOutline } from 'react-icons/io5';
import {
  AiOutlinePhone,
  AiOutlineFacebook,
  AiFillMediumSquare,
} from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FaInstagram } from 'react-icons/fa';

import { useTranslation } from 'next-i18next';

import Logo from 'components/Logo';
import LogoCircle from 'components/LogoCircle';

import {
  Container,
  InfoSection,
  InfoTilte,
  InfoLink,
  StyledLogo as LogoDiv,
  StyledLogoCircle as LogoCircleDiv,
} from './Footer.style';

const Footer = (props) => {
  const { t } = useTranslation('footer');

  return (
    <Container {...props}>
      <LogoCircleDiv>
        <LogoCircle />
      </LogoCircleDiv>

      <LogoDiv>
        <Logo objectPosition="right center" />
      </LogoDiv>

      <InfoSection>
        <InfoTilte>{t('contact')}</InfoTilte>
        <InfoLink href="https://goo.gl/Dl5rIR" target="_blank">
          <IoLocationOutline />
          Recife/PE <br />
          R. do Apolo, 161, 50030-220
        </InfoLink>
        <InfoLink href="https://goo.gl/4J52ks" target="_blank">
          <IoLocationOutline />
          Petrolina/PE <br />
          R. Irmã Maria Antonieta Souza, <br />
          170 - Sala 202, 56330-335
        </InfoLink>
        <InfoLink href="tel:+5581987905489" target="_blank">
          <AiOutlinePhone />
          +55 81 98790 5489
        </InfoLink>
        <InfoLink href="mailto:contato@interage.in" target="_blank">
          <HiOutlineMail />
          contato@interage.in
        </InfoLink>
      </InfoSection>

      <InfoSection>
        <InfoTilte>{t('follow')}</InfoTilte>
        <InfoLink
          href="https://www.instagram.com/interagesoftware/"
          target="_blank"
        >
          <FaInstagram />
          interagesoftware
        </InfoLink>
        <InfoLink
          href="https://www.facebook.com/interagesoftware/"
          target="_blank"
        >
          <AiOutlineFacebook />
          interagesoftware
        </InfoLink>
        <InfoLink href="https://medium.com/@interage" target="_blank">
          <AiFillMediumSquare />
          interage
        </InfoLink>
      </InfoSection>
    </Container>
  );
};

export default Footer;
