import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx">
        <img src={imgUrl} className="projectImg" />
        <div className="proj-txtx">
          <h4><a className="url" href={url}>{title}</a></h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}