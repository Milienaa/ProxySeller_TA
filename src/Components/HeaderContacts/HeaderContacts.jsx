import './headerContacts.scss';
import { Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";
import { useContext, useRef } from "react";
import { MyContacts } from "../../Context";

export default function HeaderContacts() {
    const { handlerSearch } = useContext(MyContacts);
    const searchField = useRef(null);

    
    return (
         <Row className='header__contacts'>
                <Col xs={9}>
                    <h2>List of Users</h2>
                </Col>
                <Col xs={3}>
                    <InputGroup>
                    <Form.Control type="text" placeholder="Enter username" ref={searchField} />
                        <Button variant='primary' onClick={(e) => handlerSearch(searchField.current.value)}>
                            <BsSearch />
                        </Button>
                    </InputGroup>
                    
                </Col>
            </Row>
    )
}