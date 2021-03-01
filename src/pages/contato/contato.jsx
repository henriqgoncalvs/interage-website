import ReactFullpage from '@fullpage/react-fullpage';

import Contact from 'components/Sections/Contact';
import Footer from 'components/Sections/Footer';

const Contato = () => {
  return (
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
  );
};

export default Contato;
