import { motion, useTransform, useViewportScroll } from 'framer-motion';
import deskBase from '../primary-desktop.svg';
import triangle from '../triangle.svg';
import step1 from '../step1.svg';
import step2 from '../step2.svg';
import { useInView } from 'react-intersection-observer';

const HowDoesItWork = () => {
  const { scrollYProgress } = useViewportScroll();
  const triangleY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const triangle2Y = useTransform(scrollYProgress, [0, 2], [800, -600]);
  const triangle3Y = useTransform(scrollYProgress, [0, 3], [300, -200]);

  const { ref: step2Ref, inView: step2InView } = useInView({
    threshold: 0.6,
  });

  const { ref: step3Ref, inView: step3InView } = useInView({
    threshold: 0.6,
  });

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
          <motion.div
            className='baseImgContainer'
            animate={
              step2InView
                ? {
                    x: '100%',
                    y: '100%',
                  }
                : step3InView
                ? {
                    x: 0,
                    y: '200%',
                  }
                : { rotateX: 5, rotateY: 10 }
            }
            transition={{ duration: 1 }}
          >
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
              className='triangle triangleLeft'
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

          <div className='stepContent step2' ref={step2Ref}>
            <div className='step2content'>
              <h3>Step. 2</h3>
              <h1>
                Effortlessly create content structures that flex to your needs
              </h1>
              <p>
                No matter which data structure is the best for your business,
                you can easily define models and add relations to create rich
                layout experiences.
              </p>
            </div>
            <motion.img
              src={triangle}
              className='triangle triangleRight'
              style={{
                y: triangle2Y,
                rotate: 90,
              }}
            />
          </div>
          <div className='stepContent step3' ref={step3Ref}>
            <motion.img
              src={triangle}
              className='triangle triangleDown'
              style={{
                y: triangle3Y,
                rotate: 90,
                // top: -100,
              }}
            />
            <div className='step3content'>
              <h3>Step. 3</h3>
              <h1>
                Effortlessly create content structures that flex to your needs
              </h1>
              <p>
                No matter which data structure is the best for your business,
                you can easily define models and add relations to create rich
                layout experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
