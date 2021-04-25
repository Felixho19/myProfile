import React from "react";
import profile from "../profile";
import { CardDeck } from "react-bootstrap";
import ProjectCard from "./ProjectCard";

class Project extends React.Component {
  render() {
    return <CardDeck className="card-deck pages">
          {profile.projects.map(function (project, i) {
            return (
                <ProjectCard project={project} key={i}/>   
            );
          })}
        </CardDeck>
  }
}
export default Project;