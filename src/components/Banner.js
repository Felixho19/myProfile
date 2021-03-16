import React from 'react';
import {Jumbotron, Container } from "reactstrap";

export default function Banner(){
    return (
        <Jumbotron>
            <Container>
                <h1 className="banner">Felix Ho</h1>
                <div>
                    <p className="desc">Open for software engineer opportunities</p>
                </div>
            </Container>
        </Jumbotron>
    );
}