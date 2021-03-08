import { Formik } from 'formik';

import { useTranslation } from 'next-i18next';

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
  const { t } = useTranslation('contato');

  return (
    <Container className={className} {...restProps}>
      <BackgroundImage />
      <TitleWrapper>
        <Title>
          {t('title_1')}
          <br />
          {t('title_2')}
          <br />
          {t('title_3')}
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
                  <input name="name" placeholder={t('name_placeholder')} />
                  <input name="email" placeholder={t('email_placeholder')} />
                  <input
                    name="company"
                    placeholder={t('company_placeholder')}
                  />
                </InputsLeft>
                <InputsRight>
                  <textarea
                    name="message"
                    placeholder={t('message_placeholder')}
                    rows="6"
                  />
                </InputsRight>
              </InputsWrapper>
              <Button type="submit" variant="primary">
                {t('button')}
              </Button>
            </FormWrapper>
          )}
        </Formik>
      </FormContainer>
    </Container>
  );
};

export default Contact;
