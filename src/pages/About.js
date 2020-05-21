import React, {Component} from 'react';
import {Container, Nav, Row, Tab, Col} from "react-bootstrap";

class About extends Component {
    render() {
        const imgStyle = {
            width: '100%',
            borderRadius: 20,
            marginTop: '3%',
            marginBottom: '3%',
        };

        return (
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-3">
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Team</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Programming</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <img
                                        src="https://static.tildacdn.com/tild6532-3533-4066-b634-316365613839/Features_Desktop_9.png"
                                        alt="figma"
                                        style={imgStyle}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque illo iusto
                                        molestias nostrum veritatis? Consequatur dicta, exercitationem facere fugit
                                        harum id nobis quaerat sapiente sed?</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <img
                                        src="https://static.tildacdn.com/tild3337-6130-4430-b439-303937306466/Hero_Cover_4.png"
                                        alt="figma"
                                        style={imgStyle}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque illo iusto
                                        molestias nostrum veritatis? Consequatur dicta, exercitationem facere fugit
                                        harum id nobis quaerat sapiente sed? Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. A aperiam dolor est illo ipsum natus nesciunt nihil officiis,
                                        perspiciatis porro quas unde! Ad iure ratione velit voluptatum. A aliquam autem
                                        delectus dolores eius est fuga ipsam itaque minima minus natus non numquam
                                        obcaecati placeat, praesentium quam repellat reprehenderit vel velit, veritatis?
                                        Adipisci alias at consectetur culpa cumque ducimus ea eligendi exercitationem
                                        explicabo fugit ipsum itaque iure laboriosam minima minus natus necessitatibus
                                        nostrum nulla odit officia perspiciatis placeat, porro quis ratione repudiandae
                                        sunt temporibus ullam ut voluptas voluptates. Adipisci deserunt dolor eveniet
                                        excepturi fuga harum odio pariatur possimus quidem rerum. Dolores!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <img
                                        src="https://static.tildacdn.com/tild6532-3231-4137-b839-306261303065/Hero_Cover_9.png"
                                        alt="figma"
                                        style={imgStyle}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque illo iusto
                                        molestias nostrum veritatis? Consequatur dicta, exercitationem facere fugit
                                        harum id nobis quaerat sapiente sed? Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. A aperiam dolor est illo ipsum natus nesciunt nihil officiis,
                                        perspiciatis porro quas unde! Porro quis ratione repudiandae
                                        sunt temporibus ullam ut voluptas voluptates. Adipisci deserunt dolor eveniet
                                        excepturi fuga harum odio pariatur possimus quidem rerum. Dolores!</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <img
                                        src="https://static.tildacdn.com/tild6438-6434-4637-b632-303362623530/Hero_Cover_15.png"
                                        alt="figma"
                                        style={imgStyle}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque illo iusto
                                        molestias nostrum veritatis? Consequatur dicta, exercitationem facere fugit
                                        harum id nobis quaerat sapiente sed?</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <img
                                        src="https://static.tildacdn.com/tild6262-6262-4864-b962-336638313363/Hero_Cover_10.png"
                                        alt="figma"
                                        style={imgStyle}
                                    />
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias animi
                                        culpa dolore ducimus enim et eum expedita explicabo illo in incidunt iste labore
                                        laboriosam minima modi natus nisi optio, perferendis placeat possimus
                                        praesentium provident quae quo quos ratione reiciendis rem repellendus saepe
                                        similique sit sunt suscipit, ullam veniam veritatis vitae voluptatibus! Alias
                                        architecto assumenda at consectetur cumque delectus distinctio dolorum eligendi
                                        exercitationem in incidunt laboriosam laborum magnam nostrum omnis quam quasi
                                        quo quod ratione recusandae reiciendis repellendus, saepe sapiente sit soluta
                                        tempore totam ut vel voluptate voluptatum. Aut ea labore molestiae nesciunt quae
                                        quaerat qui quisquam sed sunt, totam.</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;