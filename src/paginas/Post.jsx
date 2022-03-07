import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { api } from '../api/api';
import '../assets/css/post.css';

const Post = () => {
    let history = useHistory();
    const { id } = useParams();
    const [post, setPost] = useState({});

    useEffect(() => {
        const load = async () => {
            const resp = await api.get(`/posts/${id}`)
            setPost(resp.data);
        }
        load().catch(() => {
            history.push('/404')
        });
    }, [id]);

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