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
};

export const StyledButton = styled.button`
  ${({ variant, theme }) =>
    Object.keys(variants[variant]).map(
      (property) =>
        `${property}: ${theme.colors[variants[variant][property]]};`,
    )}

  ${({ width }) => (width ? `width: ${width}` : 'width: fit-content')};

  font-size: ${({ theme }) => theme.base.fontXs};

  border: none;

  padding: 3rem 5rem;

  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(90%);
  }
`;
