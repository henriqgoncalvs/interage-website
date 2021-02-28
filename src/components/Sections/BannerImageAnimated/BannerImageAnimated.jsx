import { useEffect } from 'react';

import { useAnimation } from 'framer-motion';

import {
  Container,
  ContentSlider,
  ContentWrapper,
  ShapeBackground,
  ArrowIcon,
} from './BannerImageAnimated.style';

const BannerImageAnimated = ({
  className,
  direction,
  imgSrc,
  bgColor,
  color,
  iconColor,
  isLastPage,
  children,
  active,
  ...restProps
}) => {
  const controls = useAnimation();

  const variant = {
    start: {
      visible: {
        x: '0',
      },
      hidden: {
        x: '-70vw',
      },
    },
    finish: {
      visible: {
        x: '0',
      },
      hidden: {
        x: '70vw',
      },
    },
  };

  useEffect(() => {
    if (active) {
      controls.start('visible');
    }
  }, [controls, active]);

  return (
    <Container className={className} imgSrc={imgSrc} {...restProps}>
      <ContentSlider
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.6, delay: 0.7 }}
        variants={variant[direction]}
        direction={direction}
        isLastPage={isLastPage}
      >
        <ContentWrapper color={color}>{children}</ContentWrapper>
        <ArrowIcon iconColor={iconColor} />
        <ShapeBackground direction={direction} bgColor={bgColor} />
      </ContentSlider>
    </Container>
  );
};

export default BannerImageAnimated;

/* will receive this props

direction: ['start', 'finish'] = 'start'
imgSrc = /img/bg.jpg
bgColor = 'primary'
iconColor = 'black'
isLastPage = false

*/
