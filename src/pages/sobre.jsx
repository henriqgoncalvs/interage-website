import { useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import AboutQuote from 'components/Sections/AboutQuote';
import Team from 'components/Sections/Team';
import Clients from 'components/Sections/Clients';
import HowWeDo from 'components/Sections/HowWeDo';

import Navbar from 'components/Navbar';
import BannerImage from 'components/Sections/BannerImage';
import Footer from 'components/Sections/Footer';

const Sobre = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation('sobre');

  const handleSectionScroll = (destination) => {
    setActiveIndex(destination.index);
  };

  return (
    <>
      <Navbar />
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
                bgColor="primaryDarker"
                color="primary"
                // shape={false}
                iconColor="white"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 0}
              >
                <h1>{t('title_banner')}</h1>
                <p>{t('sub_banner')}</p>
              </BannerImage>

              <AboutQuote
                className="section"
                onIconClick={() => fullpageApi.moveSectionDown()}
              />

              <Team
                className="section"
                onIconClick={() => fullpageApi.moveSectionDown()}
              />

              <Clients
                className="section"
                onIconClick={() => fullpageApi.moveSectionDown()}
              />

              <HowWeDo
                className="section"
                isLastPage
                onIconClick={() => fullpageApi.moveTo(1, 0)}
              />

              <Footer className="section fp-auto-height" />
            </div>
          );
        }}
      />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['sobre', 'navbar', 'footer'])),
  },
});

export default Sobre;
