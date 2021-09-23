import { motion, useTransform, useViewportScroll } from 'framer-motion';
import deskBase from '../primary-desktop.svg';
import triangle from '../triangle.svg';
import step1 from '../step1.svg';
import step2 from '../step2.svg';
import step3 from '../step3.svg';
import step4 from '../step4.svg';
import { useInView } from 'react-intersection-observer';

const HowDoesItWork = () => {
  const { scrollYProgress } = useViewportScroll();
  const triangleY = useTransform(scrollYProgress, [0, 1], [0, -250]);
  const triangle2Y = useTransform(scrollYProgress, [0, 2], [800, -600]);
  const triangle3Y = useTransform(scrollYProgress, [0, 3], [300, -200]);
  const triangle4Y = useTransform(scrollYProgress, [0, 4], [300, -300]);

  const { ref: step2Ref, inView: step2InView } = useInView({
    threshold: 0.6,
  });

  const { ref: step3Ref, inView: step3InView } = useInView({
    threshold: 0.6,
  });
  const { ref: step4Ref, inView: step4InView } = useInView({
    threshold: 0.6,
  });

  const baseImageAnimate = () => {
    if (step2InView) return { x: '100%', y: '100%', rotateX: 0, rotateY: -15 };
    if (step3InView) return { x: -15, y: '200%', rotateX: 5, rotateY: 0 };
    if (step4InView) return { x: '100%', y: '300%', rotateX: 0, rotateY: -3 };
    return { rotateX: 5, rotateY: 10 };
  };
  const baseDynamicSrc = () => {
    if (step2InView) return step2;
    if (step3InView) return step3;
    if (step4InView) return step4;
    return step1;
  };

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
            animate={baseImageAnimate()}
            transition={{ duration: 1, type: 'spring', mass: 0.5 }}
          >
            <div className='imgContainer'>
              <div className='background'>
                <img src={deskBase} className='base' />
              </div>
              <img src={baseDynamicSrc()} className='baseImg' />
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
                Easily build app and digital experiences without the distraction
                of CMS complexities.
              </h1>
              <p>
                Focus your talent on what matters. You can integrate individual
                best-in-class services by third-party vendors and connect any
                framework of your choice.
              </p>
            </div>
          </div>
          <div className='stepContent step2' ref={step4Ref}>
            <div className='step2content'>
              <h3>Step. 4</h3>
              <h1>Consume Strapi API from any client using REST or GraphQL</h1>
              <p>
                You can use a standard RESTful API or GraphQL to query your
                content. Based on Apollo, our GraphQL plugin offers a full
                compatibility with the whole GraphQL ecosystem.{' '}
              </p>
            </div>
            <motion.img
              src={triangle}
              className='triangle triangleRight'
              style={{
                y: triangle4Y,
                rotate: 270,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowDoesItWork;
