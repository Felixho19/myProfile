import React from "react";
import profile from "../profile";
import { Card, CardDeck } from "react-bootstrap";

class Project extends React.Component {
  render() {
    return <CardDeck>
          {profile.projects.map(function (project, i) {
            return (
              
                <Card key={i} className="card" style={{ width: '18rem'}}>
                    <Card.Img className="cardImage" varient="top" src={process.env.PUBLIC_URL+project.logo} alt={project.projectName}/>
                    <Card.Body>
                      <Card.Title><a href={project.url}>{project.projectName}</a></Card.Title>
                      <Card.Text>{project.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <h5>Implemented by</h5>
                      <ul>
                        {project.stacks.map((stack, idx) => {
                          return <li>
                            {stack}
                          </li>
                        })}
                      </ul>
                    </Card.Footer>
                </Card>
              
            );
          })}
        </CardDeck>
  }
}

export default Project;