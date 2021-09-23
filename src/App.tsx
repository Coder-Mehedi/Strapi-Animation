import './App.css';
import deskLoader from './desktopSkeletonLoading.svg';
import mobile from './mobileSkeletonLoading.svg';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
import Button from './components/button';
import HowDoesItWork from './components/how-does-it-work';

function App() {
  const { scrollYProgress } = useViewportScroll();
  const desktopY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const mobileY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <div className='App'>
      <section className='hero'>
        <div className='heroContentContainer'>
          <h1>Design APIs fast, manage content easily.</h1>
          <p>
            Strapi is the leading open-source headless CMS. It’s 100%
            JavaScript, fully customizable and developer-first.
          </p>
          <Button>Get Started</Button>
          <Button className='tryLiveDemo'>Try live demo</Button>
          <div className='svgLoadingContainer'>
            <motion.img
              src={deskLoader}
              className='webLoading'
              style={{
                y: desktopY,
                transition: 'all',
                transitionTimingFunction: 'ease',
                transitionDuration: '1.2s',
              }}
              transition={{ type: 'tween' }}
            />
            <motion.img
              src={mobile}
              className='mobileLoading'
              style={{
                y: mobileY,
                transition: 'all',
                transitionTimingFunction: 'ease',
                transitionDuration: '1.2s',
              }}
            />
          </div>
        </div>
      </section>
      <HowDoesItWork />
    </div>
  );
}

export default App;
