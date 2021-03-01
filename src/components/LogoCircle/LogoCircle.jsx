import Image from 'next/image';

const LogoCircle = ({ width = 50, height = 50 }) => (
  <Image
    src="/img/logo-interage-circulo.png"
    alt="Interage Logo"
    layout="fixed"
    objectFit="contain"
    objectPosition="left center"
    width={width}
    height={height}
  />
);

export default LogoCircle;
