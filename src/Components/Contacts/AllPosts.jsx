import './allPosts.scss';
import { useEffect, useState, useContext } from "react";
import { Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { MyContacts } from '../../Context';

export default function AllPosts() {
    const [userPosts, setUserPosts] = useState([]);
    const { users } = useContext(MyContacts);

    const fetchUserPosts = async (userId) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const postsData = await response.json();
        setUserPosts(postsData);
    };

    useEffect(() => {
        fetchUserPosts(1);
    }, []);

    const handlerUserButtonClick = (userId) => {
        fetchUserPosts(userId);
    };

    return (
        <Container>
            <h1 className="new__title text-center">Titles of User's Posts</h1>
            <div className='new__menu'>
                {users.map(user => (
                    <Button variant='primary'  key={user.id} onClick={() => handlerUserButtonClick(user.id)}>
                        User {user.id}
                    </Button>
                ))}
            </div>
            <div>
                <h2>User Posts:</h2>
                {userPosts.map(post => (
                    <Link className="new__posts" key={post.id} to={`/posts/${post.id}`}>
                        {post.title}
                    </Link>
                ))}
            </div>
        </Container>
    )
}
