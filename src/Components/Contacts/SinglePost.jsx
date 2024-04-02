import { useEffect, useState } from "react"
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function SinglePost() {
    const { id } = useParams();
    const [singlePost, setSinglePost] = useState({});


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                                                            .then(response => response.json())
                                                            .then(json => setSinglePost(json))
    },[id])
    return (
        <Container className="">
            <h1 className="new__post text-center">{singlePost.title}</h1>
            <p className="new__text text-center">{singlePost.body}</p>
        </Container>
    )
}