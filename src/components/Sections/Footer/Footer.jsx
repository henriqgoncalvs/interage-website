import { IoLocationOutline } from 'react-icons/io5';
import { AiOutlinePhone, AiOutlineFacebook } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { FaInstagram, FaBlogger } from 'react-icons/fa';

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
  return (
    <Container {...props}>
      <LogoCircleDiv>
        <LogoCircle />
      </LogoCircleDiv>

      <LogoDiv>
        <Logo objectPosition="right center" />
      </LogoDiv>

      <InfoSection>
        <InfoTilte>Contato</InfoTilte>
        <InfoLink>
          <IoLocationOutline />
          Recife/PE <br />
          R. do Apolo, 161, 50030-220
        </InfoLink>
        <InfoLink>
          <IoLocationOutline />
          Petrolina/PE <br />
          R. Irmã Maria Antonieta Souza, <br />
          170 - Sala 202, 56330-335
        </InfoLink>
        <InfoLink>
          <AiOutlinePhone />
          +55 81 98790 5489
        </InfoLink>
        <InfoLink>
          <HiOutlineMail />
          contato@interage.in
        </InfoLink>
      </InfoSection>

      <InfoSection>
        <InfoTilte>Acompanhe a Interage</InfoTilte>
        <InfoLink>
          <FaInstagram />
          interagesoftware
        </InfoLink>
        <InfoLink>
          <AiOutlineFacebook />
          interagesoftware
        </InfoLink>
        <InfoLink>
          <FaBlogger />
          interage.in/blog
        </InfoLink>
      </InfoSection>
    </Container>
  );
};

export default Footer;
