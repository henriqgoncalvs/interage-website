import ReactFullpage from '@fullpage/react-fullpage';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Navbar from 'components/Navbar';
import Contact from 'components/Sections/Contact';
import Footer from 'components/Sections/Footer';

const Contato = () => {
  return (
    <>
      <Navbar />
      <ReactFullpage
        navigation={false}
        // scrollOverflow
        sectionsColor={['black']}
        render={() => {
          return (
            <div id="fullpage-wrapper">
              <Contact className="section section1" />

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
    ...(await serverSideTranslations(locale, ['contato', 'navbar', 'footer'])),
  },
});

export default Contato;
