import Head from 'next/head';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import theme from 'styles/theme';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  :root {
    font-size: 62.5%;
  }

  body {
    ${theme.fonts.gotham}
    font-size: ${theme.base.fontSize};
    background-color: ${theme.colors.primaryDarker};
    color: ${theme.colors.text};
  }

  button {
    ${theme.fonts.gotham}
    cursor: pointer;
  }

  h1, h2 {
    margin: 0.37rem 0;
  }

  p {
    ${theme.fonts.gothamLight}
    font-size: ${theme.base.fontMd};
    margin: 0.5rem 0;
  }

  /* Famous Media Queries
    |   px |  em |
    +------+-----+
    |  320 |  20 |
    |  480 |  30 |
    |  768 |  48 |
    | 1024 |  64 |
    | 1200 |  75 |
    | 1600 | 100 |
  */

  @media (min-width: 0em) {
    :root {
      font-size: 40%;
    }

    h1, h2 {
      font-size: ${theme.base.fontXl};
    }

    h3 {
      font-size: ${theme.base.fontLg};
    }
  }

  @media (min-width: 48em) {
    :root {
      font-size: 48.5%;
    }

    h1, h2 {
      font-size: ${theme.base.font2Xl};
    }

    h3 {
      font-size: ${theme.base.fontXl};
    }
  }

  @media (min-width: 64em) {
    :root {
      font-size: 62.5%;
    }
  }

`;

const GlobalProvider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Interage Software</title>
      </Head>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default GlobalProvider;
