import { Formik } from 'formik';
import Image from 'next/image';

import Button from 'components/Button';

import {
  Container,
  BackgroundImage,
  TitleWrapper,
  Title,
  FormContainer,
  FormWrapper,
  InputsWrapper,
  InputsLeft,
  InputsRight,
} from './Contact.style';

const Contact = ({ className, ...restProps }) => {
  return (
    <Container className={className} {...restProps}>
      <BackgroundImage />
      <TitleWrapper>
        <Title>
          Tem um projeto? Legal!
          <br />
          Mande-nos os detalhes para
          <br />
          conversarmos mais sobre isso.
        </Title>
      </TitleWrapper>
      <FormContainer>
        <Formik
          initialValues={{
            name: '',
            email: '',
            company: '',
            message: '',
          }}
        >
          {() => (
            <FormWrapper>
              <InputsWrapper>
                <InputsLeft>
                  <input name="name" placeholder="Seu nome" />
                  <input name="email" placeholder="Seu email" />
                  <input name="company" placeholder="Nome da sua empresa" />
                </InputsLeft>
                <InputsRight>
                  <textarea name="message" placeholder="Mensagem" rows="6" />
                </InputsRight>
              </InputsWrapper>
              <Button type="submit" variant="primary">
                ENVIAR
              </Button>
            </FormWrapper>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Contact;
