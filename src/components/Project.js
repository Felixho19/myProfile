import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import moment from "moment";
import { Media } from "reactstrap";

function getDuration(duration) {
  const years = parseInt(duration / 12);
  const months = (duration > 12)? duration % 12 : duration
  return (years > 0? years + " year" + (years > 1? "s": "") + " and " : "") + (months > 0? months + " month" + (months > 1? "s": "") : "");
};

class Project extends React.Component {
  render() {
    return <Container>
      <Row>
        <Col>
          {profile.projects.map(function (project, i) {
            moment.locale('en');
            return (
              <div key={i}>
                <Media>
                  <Media left top href={project.url}>
                    <Media object src={project.logo} alt={project.projectName}/>
                  </Media>
                  <Media body>
                    <Media heading>
                      <a href={project.url}>{project.projectName}</a>
                    </Media>
                      <p className="jobDescription">{project.description}</p>
                  </Media>
                </Media>
              </div>
            );
          })}
        </Col>
      </Row>
      
    </Container>
  }
}

export default Project;