import styled from 'styled-components';

const variants = {
  light: {
    'background-color': 'white',
    color: 'black',
  },
  dark: {
    'background-color': 'black',
    color: 'white',
  },
  primary: {
    'background-color': 'primary',
    color: 'white',
  },
};

export const StyledButton = styled.button`
  ${({ variant, theme }) =>
    Object.keys(variants[variant]).map(
      (property) =>
        `${property}: ${theme.colors[variants[variant][property]]} !important;`,
    )}

  ${({ width }) => (width ? `width: ${width}` : 'width: fit-content')};

  font-size: ${({ theme }) => theme.base.fontXs};

  border: none;

  padding: 3rem 5rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    /* filter: brightness(90%); */
    box-shadow: 3px 3px 8px 3px rgba(0, 0, 0, 0.3);
  }

  a {
    text-decoration: none;
    color: ${({ variant, theme }) => theme.colors[variants[variant].color]};
  }
`;