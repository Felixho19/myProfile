import React from "react";
import { Container, Row, Col} from "reactstrap";

class Greetings extends React.Component {
    render() {
        return <Container>
            <Row>
                <Col className="page">
                    <h2>Greetings!</h2>
                    <p>I have been working for software industry for 2 years. Focused on software development and CI/CD setup.</p>
                    <p>Feel free to contact me via Linkedin. (Link at the bottom)</p>
                    <hr/>
                    <p>This static website is for exhibiting some of my courseworks / side projects.</p>
                </Col>
            </Row>
        </Container>
    }
}
export default Greetings;