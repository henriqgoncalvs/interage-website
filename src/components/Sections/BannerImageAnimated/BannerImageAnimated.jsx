import { useEffect } from 'react';

import { useAnimation } from 'framer-motion';

// eslint-disable-next-line import/no-absolute-path
// import arrowIcon from '/arrow-down.svg';

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
  onIconClick,
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
      >
        <ContentWrapper color={color}>{children}</ContentWrapper>
        <ArrowIcon
          iconColor={iconColor}
          onClick={onIconClick}
          direction={direction}
          isLastPage={isLastPage}
        >
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="292.362px"
            height="292.362px"
            viewBox="0 0 292.362 292.362"
            xmlSpace="preserve"
          >
            <path
              d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424
      C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428
      s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
            />
          </svg>
        </ArrowIcon>
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
