/* eslint-disable react/button-has-type */

import { StyledButton } from './Button.style';

const Button = ({ children, ...restProps }) => {
  return <StyledButton {...restProps}>{children}</StyledButton>;
};

export default Button;
