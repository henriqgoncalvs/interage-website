import Image from 'next/image';

const Logo = ({ width = 200, height = 40 }) => (
  <Image
    src="/img/logo-interage.png"
    alt="Interage Logo"
    layout="fixed"
    objectFit="contain"
    objectPosition="left center"
    width={width}
    height={height}
  />
);

export default Logo;
