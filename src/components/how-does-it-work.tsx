import { motion, useTransform, useViewportScroll } from 'framer-motion';
import deskBase from '../primary-desktop.svg';
import triangle from '../triangle.svg';
import step1 from '../step1.svg';
import step2 from '../step2.svg';

const HowDoesItWork = () => {
  const { scrollYProgress } = useViewportScroll();
  const triangleY = useTransform(scrollYProgress, [0, 1], [0, -300]);

  return (
    <div className='gradientHeaderWithIntro'>
      <div className='sectionHeaderContent'>
        <h6>STEP-BY-STEP GUIDE</h6>
        <h1>How does it work?</h1>
        <h2>
          Make a flxible data structure in 2 minutes. <br />
          use our powerful features to costomize your API.
        </h2>
      </div>
      <div className='slideArea'>
        <div className='animationContent'>
          <motion.div className='baseImgContainer'>
            <div className='imgContainer'>
              <div className='background'>
                <img src={deskBase} className='base' />
              </div>
              <img src={step1} className='step1' />
            </div>
          </motion.div>
          <div className='stepContent'>
            <motion.img
              src={triangle}
              className='triangle'
              style={{
                y: triangleY,
              }}
            />
            <h3>Step. 1</h3>
            <h1>
              Effortlessly create content structures that flex to your needs
            </h1>
            <p>
              No matter which data structure is the best for your business, you
              can easily define models and add relations to create rich layout
              experiences.
            </p>
          </div>

          <div className='stepContent step2content'>
            <h3>Step. 1</h3>
            <h1>
              Effortlessly create content structures that flex to your needs
            </h1>
            <p>
              No matter which data structure is the best for your business, you
              can easily define models and add relations to create rich layout
              experiences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
