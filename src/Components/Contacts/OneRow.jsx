import './singlePost.scss';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function OneRow({name, username, email, phone, website, id}) {
    return (
        <tr >
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td><Button variant='primary'><Link className='user__posts' key={id} to={'/posts'}>More..</Link></Button></td>
        </tr>
    )
}