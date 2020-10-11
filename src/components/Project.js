import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../profile";
import moment from "moment";
import { Media } from "reactstrap";

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
                    <Media object src={process.env.PUBLIC_URL+project.logo} alt={project.projectName}/>
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