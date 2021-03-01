import { useState } from 'react';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';

import Button from 'components/Button';

import BannerImage from 'components/Sections/BannerImage';
import Footer from 'components/Sections/Footer';

const Servicos = () => {
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
                bgColor="white"
                color="primary"
                iconColor="black"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 0}
              >
                <h1>Somos movidos por boas ideias.</h1>
                <p>
                  Transformamos ideias, desenvolvendo software desde a
                  prototipação até sugestões de modelo de negócio.
                </p>
                <Button
                  style={{ marginTop: '2rem' }}
                  type="button"
                  variant="dark"
                >
                  <Link href="/contato">
                    <a>COMECE SEU PROJETO</a>
                  </Link>
                </Button>
              </BannerImage>

              <BannerImage
                className="section section2"
                direction="finish"
                imgSrc="/img/bg.jpg"
                bgColor="primary"
                color="white"
                iconColor="white"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 1}
              >
                <h1>Veja sua ideia ser implementada do jeito que preferir.</h1>
                <p>
                  Sabemos o que é necessário para que sua ideia seja
                  implementada da melhor forma possível, e nós iremos te ajudar
                  a potencializar os resultados.
                </p>
              </BannerImage>

              <BannerImage
                className="section section3"
                direction="start"
                imgSrc="/img/bg.jpg"
                bgColor="primaryLighter"
                color="primaryDarker"
                iconColor="white"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 2}
              >
                <h1>Obtenha uma implementação eficiente da sua ideia.</h1>
                <p>
                  Veja sua ideia ser implementada com as melhores tecnlogias do
                  mercado. A Interage consegue somar eficiência com modernidade.
                </p>
              </BannerImage>

              <BannerImage
                className="section section3"
                direction="finish"
                imgSrc="/img/bg.jpg"
                bgColor="primary"
                color="white"
                iconColor="black"
                isLastPage
                onIconClick={() => fullpageApi.moveTo(1, 0)}
                active={activeIndex === 3}
              >
                <h1>Vamos conversar mais sobre suas ideias.</h1>
                <p>Entre em contato com a Interage pelo formulário.</p>
                <Button
                  style={{ marginTop: '2rem' }}
                  type="button"
                  variant="dark"
                >
                  <Link href="/contato">
                    <a>COMECE SEU PROJETO</a>
                  </Link>
                </Button>
              </BannerImage>

              <Footer className="section fp-auto-height" />
            </div>
          );
        }}
      />
    </>
  );
};

export default Servicos;
