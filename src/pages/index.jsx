import { useState } from 'react';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';

import Button from 'components/Button';

import BannerImage from 'components/Sections/BannerImage';
import Footer from 'components/Sections/Footer';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSectionScroll = (destination) => {
    setActiveIndex(destination.index);
  };

  return (
    <>
      <ReactFullpage
        navigation={false}
        // scrollOverflow
        sectionsColor={['white']}
        onLeave={(origin, destination) => handleSectionScroll(destination)}
        render={({ fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <BannerImage
                className="section section1"
                direction="start"
                imgSrc="/img/bg.jpg"
                bgColor="primary"
                color="white"
                iconColor="black"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 0}
              >
                <h1>Oi! Nós somos a Interage.</h1>
                <p>
                  Somos apaixonados por resolver problemas e entregar
                  experiências personalizadas.
                </p>
                <Link href="/contato" passHref>
                  <Button
                    style={{ marginTop: '2rem' }}
                    type="button"
                    variant="light"
                  >
                    COMECE SEU PROJETO
                  </Button>
                </Link>
              </BannerImage>

              <BannerImage
                className="section section2"
                direction="finish"
                imgSrc="/img/bg.jpg"
                bgColor="white"
                color="primary"
                iconColor="black"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 1}
              >
                <h2>Nosso trabalho é transformar ideias em realidade.</h2>
              </BannerImage>

              <BannerImage
                className="section section3"
                direction="start"
                imgSrc="/img/bg.jpg"
                bgColor="primaryDarker"
                color="primary"
                iconColor="white"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 2}
              >
                <h2>Nosso objetivo é resolver qualquer problema.</h2>
              </BannerImage>

              <BannerImage
                className="section section3"
                direction="finish"
                imgSrc="/img/bg.jpg"
                bgColor="primary"
                color="white"
                iconColor="black"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 3}
              >
                <h2>E nós fazemos isso da forma que o cliente preferir.</h2>
              </BannerImage>

              <BannerImage
                className="section section3"
                direction="start"
                imgSrc="/img/bg.jpg"
                bgColor="white"
                color="primary"
                iconColor="black"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 4}
              >
                <h2>Softwares Personalizados</h2>
                <p>
                  Nossa especialidade é o desenvolvimento de softwares
                  personalizados para ajudar na resolução de problemas.
                </p>
              </BannerImage>

              <BannerImage
                className="section section3"
                direction="finish"
                imgSrc="/img/bg.jpg"
                bgColor="primaryDarker"
                color="primary"
                iconColor="primary"
                onIconClick={() => fullpageApi.moveTo(1, 0)}
                isLastPage
                active={activeIndex === 5}
              >
                <h2>Trabalhe com a Interage.</h2>
                <p>
                  Nós estamos sempre abertos para ouvir e discutir todas as
                  ideias dos nossos clientes.
                </p>
                <Link href="/contato" passHref>
                  <Button
                    style={{ marginTop: '2rem' }}
                    type="button"
                    variant="light"
                  >
                    ENTRE EM CONTATO
                  </Button>
                </Link>
              </BannerImage>

              <Footer className="section fp-auto-height" />
            </div>
          );
        }}
      />
    </>
  );
}
