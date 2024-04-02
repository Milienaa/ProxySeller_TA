import './header.scss';
import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
    return (
        <section className="header">
            <Container>
                <Row>
                    <Col>
                        <h1>CONTACTS</h1>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}