import { Container, TitleWrapper, Title, FormContainer } from './Contact.style';

const Contact = ({ className, ...restProps }) => {
  return (
    <Container className={className} {...restProps}>
      <TitleWrapper>
        <Title>
          Tem um projeto? Legal!
          <br />
          Nos mande os detalhes para
          <br />
          conversarmos mais sobre isso.
        </Title>
      </TitleWrapper>
      <FormContainer>Form</FormContainer>
    </Container>
  );
};

export default Contact;
