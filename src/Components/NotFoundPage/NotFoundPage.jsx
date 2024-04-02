import { Container, Row, Col } from 'react-bootstrap';

export default function NotFoundPage() {
    return (
        <Container>
            <Row>
                <Col>
                    <h2>404</h2>
                    <p>Даної сторінки не знайдено</p>
                </Col>
            </Row>
        </Container>
    );
}