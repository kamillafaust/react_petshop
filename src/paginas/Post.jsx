import React from 'react';
import '../assets/css/post.css';
import useFetchPost from '../hooks/useFetchPost';

const Post = () => {

    const { post } = useFetchPost()
    
    return (
        <main className=" container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    )
}

export default Post;