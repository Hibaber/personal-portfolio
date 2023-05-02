import { Container, Row, } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/gith.svg';
import navIcon3 from '../assets/img/gmail-icon.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="d-flex justify-content-center mt-5 " >
        <Row>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/hiba-b-926039202/"><img src={navIcon1} alt="linkedin" /></a>
            <a href="https://github.com/Hibaber"><img src={navIcon2} alt="github" /></a>
            <a href="mailto:hiba.berber@gmail.com"><img src={navIcon3} alt="gmail" className="email" /></a>
          </div>
        </Row>
      </Container>
    </footer>
  )
}
