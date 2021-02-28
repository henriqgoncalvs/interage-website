import { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import BannerImageAnimated from 'components/Sections/BannerImageAnimated';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSectionScroll = (destination) => {
    console.log(destination);
    setActiveIndex(destination.index);
  };

  return (
    <ReactFullpage
      navigation
      scrollOverflow
      sectionsColor={['orange', 'purple', 'green', 'yellow', 'red']}
      onLeave={(origin, destination) => handleSectionScroll(destination)}
      render={({ fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <BannerImageAnimated
              className="section section1"
              direction="start"
              imgSrc="/img/bg.jpg"
              bgColor="primary"
              color="white"
              iconColor="black"
              active={activeIndex === 0}
            >
              <h1>Oi! Nós somos a Interage.</h1>
              <p>
                Somos apaixonados por resolver problemas e entregar experiências
                personalizadas.
              </p>
            </BannerImageAnimated>

            <BannerImageAnimated
              className="section section2"
              direction="finish"
              imgSrc="/img/bg.jpg"
              bgColor="white"
              color="primary"
              iconColor="black"
              active={activeIndex === 1}
            >
              <h1>Nosso trabalho é transformar ideias em realidade.</h1>
            </BannerImageAnimated>

            <BannerImageAnimated
              className="section section3"
              direction="start"
              imgSrc="/img/bg.jpg"
              bgColor="white"
              color="primary"
              iconColor="black"
              active={activeIndex === 2}
            >
              <h1>Nosso trabalho é transformar ideias em realidade.</h1>
            </BannerImageAnimated>

            <div className="section">
              <h3>Section 3</h3>
              <button type="button" onClick={() => fullpageApi.moveTo(1, 0)}>
                Move top
              </button>
            </div>
          </div>
        );
      }}
    />
  );
}
