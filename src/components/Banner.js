import React from 'react';
import {Jumbotron, Container } from "reactstrap";

export default function Banner(){
    return (
    <Jumbotron>
        <Container>
            <h1 className="display-3">Felix Ho</h1>
            <p className="lead">I am a software developer from Hong Kong</p>
        </Container>
    </Jumbotron>
    );
}