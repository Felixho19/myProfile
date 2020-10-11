import React from "react";
import { Container, Row, Col, Media} from "reactstrap";
import { Stage, Layer, Text } from 'react-konva';

class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDragging: false,
            x: 0,
            y: 10
        };
      }
    render() {
        return <Container>
        <Row>
            <Col>
            <Media body className="greeting">
                <Media heading>
                Welocme to Felix's personal webpage.
                </Media>
                This is my personal website for introducing what I have done in the past.
                <Stage width={window.innerWidth} height={window.innerHeight}>
                    <Layer>
                        <Text
                            text="Now thinking how to use konva ~"
                            x={this.state.x}
                            y={this.state.y}
                            draggable
                            fill={this.state.isDragging ? 'green' : 'black'}
                            onDragStart={() => {
                            this.setState({
                                isDragging: true
                            });
                            }}
                            onDragEnd={e => {
                            this.setState({
                                isDragging: false,
                                x: e.target.x(),
                                y: e.target.y()
                            });
                            }}
                        />
                    </Layer>
                </Stage>
            </Media>
            </Col>
        </Row>
        </Container>
    }
}
export default Greetings;