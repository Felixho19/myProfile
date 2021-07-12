import React from "react";
import { Container, Row, Col} from "reactstrap";

class Greetings extends React.Component {
    render() {
        return <Container>
            <Row>
                <Col className="page">
                    <p>Hi, this static website is using for exhibiting my coursework and side projects.</p>
                    <p>Feel free to contact me via Linkedin. (Link at the bottom)</p>
                </Col>
            </Row>
        </Container>
    }
}
export default Greetings;