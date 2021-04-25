import { Card } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
// get our fontawesome imports
import { faEye, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectCard(props){
    const {project, key} = props;
    const delaySecond = 1;
    const [starCount, setStarCount] = useState(0);
    const [watchCount, setWatchCount] = useState(0);

    useEffect(() => {
      let timer1 = setTimeout(() => {
          fetch("https://ncyr2o8m84.execute-api.us-east-2.amazonaws.com/default/getFelixPublicGitHubInfo?repo=" + project.repo, {
            method: 'GET',
          }).then((response) => {
              if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' + response.status);
                return;
              }
              response.json().then((data) => {
                console.log(data);
                setStarCount(data.starCount);
                setWatchCount(data.watchCount);
              });
          }).catch((err) => {
            console.error(err);
          });;
      }, delaySecond * 1000);
      // this will clear Timeout
      // when component unmount like in willComponentUnmount
      return () => {
        clearTimeout(timer1);
      };
    });
    return (
        <Card key={key} className="card" style={{width: '18rem'}}>
          <Card.Img className="cardImage" varient="top" src={process.env.PUBLIC_URL+project.logo} alt={project.projectName}/>
          <Card.Body>
            <Card.Title><a href={project.url} rel="noopener noreferrer" target="_blank" >{project.projectName}</a></Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <Card.Text>
              <span className="icon"><FontAwesomeIcon icon={faStar} />:{starCount}</span>
              <span className="icon"><FontAwesomeIcon icon={faEye} />:{watchCount}</span>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <ul>
              {project.stacks.map((stack, idx) => {
                return <li key={idx}>
                  {stack}
                </li>
              })}
            </ul>
          </Card.Footer>
      </Card>    
    );
};