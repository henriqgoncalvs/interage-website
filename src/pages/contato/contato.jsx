import ReactFullpage from '@fullpage/react-fullpage';

import Button from 'components/Button';

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
            <Contact className="section section1">
              <h1>Oi! Nós somos a Interage.</h1>
              <p>
                Somos apaixonados por resolver problemas e entregar experiências
                personalizadas.
              </p>
              <Button
                style={{ marginTop: '2rem' }}
                type="button"
                variant="light"
              >
                ENVIAR
              </Button>
            </Contact>

            <Footer className="section fp-auto-height" />
          </div>
        );
      }}
    />
  );
};

export default Contato;
