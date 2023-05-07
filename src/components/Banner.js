import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/hibaportfolio.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [" Frontend Developer"];
  const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  < div className="box-wrap">
                    <h1 className="intro-title">{`Hi! I'm Hiba, a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Frontend Developer" ]'><span className="wrap">{text}</span></span></h1>
                  </div>
                  <p className="aboutme"> After working for over 7 years in translation and office management fields, I discovered my new passion for the amazing world of Tech and programming languages and decided to embark on a Full-stack MERN Web Development Bootcamp journey. <br /> <br />  I am looking forward to landing my first job as a Frontend Developer and continue learning and growing as a professional.<br /> <br /> In my free time I love hanging out with my friends, travelling, cooking & exploring new restaurants, reading and cicling.
                  </p>

                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5} className="pic-box">
            <img src={headerImg} alt="Header Img" className="pic" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
