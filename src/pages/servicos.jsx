import { useState } from 'react';
import Link from 'next/link';
import ReactFullpage from '@fullpage/react-fullpage';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Button from 'components/Button';

import Navbar from 'components/Navbar';
import BannerImage from 'components/Sections/BannerImage';
import Footer from 'components/Sections/Footer';

const Servicos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation('servicos');

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
                bgColor="white"
                color="primary"
                iconColor="black"
                onIconClick={() => fullpageApi.moveSectionDown()}
                active={activeIndex === 0}
              >
                <h1>{t('title_section1')}</h1>
                <p>{t('sub_section1')}</p>
                <Link href="/contato">
                  <Button
                    style={{ marginTop: '2rem' }}
                    type="button"
                    variant="dark"
                  >
                    {t('button_section1')}
                  </Button>
                </Link>
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
                <h1>{t('title_section2')}</h1>
                <p>{t('sub_section2')}</p>
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
                <h1>{t('title_section3')}</h1>
                <p>{t('sub_section3')}</p>
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
                <h1>{t('sub_section4')}</h1>
                <p>{t('sub_section4')}</p>
                <Link href="/contato">
                  <Button
                    style={{ marginTop: '2rem' }}
                    type="button"
                    variant="dark"
                  >
                    {t('button_section4')}
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
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['servicos', 'navbar', 'footer'])),
  },
});

export default Servicos;
