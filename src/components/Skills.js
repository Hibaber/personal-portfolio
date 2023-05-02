import reactImg from "../assets/img/react-2 (1).svg";
import htmlImg from "../assets/img/html-1 (1).svg";
import typeScriptImg from "../assets/img/typescript.svg";
import javaScriptImg from "../assets/img/javascript.svg";
import muiImg from "../assets/img/material-ui-1.svg";
import sassImg from "../assets/img/sass-1.svg";
import cssImg from "../assets/img/css-3 (1).svg";
import bootstrapImg from "../assets/img/bootstrap-4.svg";
import mongoDbImg from "../assets/img/mongodb-icon-1 (1).svg";
import nodeImg from "../assets/img/nodejs-2.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {

      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tech Skills</h2>
              <p>Technologies & programming languages that I use<br></br></p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={reactImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={typeScriptImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={javaScriptImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={muiImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={mongoDbImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={htmlImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={cssImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={bootstrapImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={sassImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={nodeImg} alt="Image" className='svg-img' />
                </div>
                <div className="item">
                  <img src={mongoDbImg} alt="Image" className='svg-img' />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
