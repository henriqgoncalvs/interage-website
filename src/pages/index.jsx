import { useEffect } from 'react';
// import Head from 'next/head';
import Link from 'next/link';

import ReactFullpage from '@fullpage/react-fullpage';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

function Box({ children }) {
  return (
    <div
      style={{
        padding: 40,
        background: 'white',
        display: 'inline-block',
        borderRadius: 5,
      }}
    >
      {children}
    </div>
  );
}

function FadeInWhenVisible({ children, className }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <ReactFullpage
      navigation
      scrollOverflow
      sectionsColor={['orange', 'purple', 'green', 'yellow', 'red']}
      render={({ fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section">
              <h3>Section 1</h3>
              <p>Descrição</p>
            </div>
            <FadeInWhenVisible className="section section2">
              <Box>Isso é uma box</Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="section section3">
              <Box>
                <Link href="/about">About</Link>
              </Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible
              className="section section4"
              style={{ background: 'yellow' }}
            >
              <Box>Isso é uma box</Box>
            </FadeInWhenVisible>
            <FadeInWhenVisible className="section section5">
              <Box>Isso é uma box</Box>
            </FadeInWhenVisible>
            <div className="section">
              <h3>Section 3</h3>
              <button type="button" onClick={() => fullpageApi.moveTo(1, 0)}>
                Move top
              </button>
            </div>
          </div>
        );
      }}
    />
  );
}
