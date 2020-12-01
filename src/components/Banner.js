import React from 'react';
import {Jumbotron, Container } from "reactstrap";

export default function Banner(){
    return (
    <Jumbotron>
        <Container>
            <h1 className="banner display-3">Felix Ho</h1>
            <div className="mask">
                <p className="desc">I am a software developer from Hong Kong</p>
            </div>
        </Container>
    </Jumbotron>
    );
}