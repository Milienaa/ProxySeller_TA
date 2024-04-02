import React, { useContext } from "react";
import HeaderContacts from "../HeaderContacts/HeaderContacts";
import { Col, Container, Row, Table } from "react-bootstrap";
import { FaSortAlphaDownAlt, FaSortAlphaDown } from "react-icons/fa";
import { MyContacts } from "../../Context";
import OneRow from "./OneRow";

export default function Contacts() {

    const { users, handlerSortByUsername, Sortable, sortDirection } = useContext(MyContacts);

    return (
        <Container>
            <HeaderContacts />
            <Row>
                <Col>                    
                    <Table striped bordered hover responsive>
                        <thead className='table-dark'>
                            <tr>
                                <th>Name</th>
                                <th>Username <Sortable 
                                                        onClick={handlerSortByUsername} 
                                                        icon={sortDirection ? <FaSortAlphaDownAlt /> : <FaSortAlphaDown />}
                                            />
</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Website</th>
                                <th>Posts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(elem => <OneRow key={elem.id} {...elem} />)} 
                        </tbody>
                        <tfoot></tfoot>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}
