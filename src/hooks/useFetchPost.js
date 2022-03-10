import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { api } from "../api/api";

export default function useFetchPost() {
    
    let history = useHistory();
    const { id } = useParams();

    const [post, setPosts] = useState({})

    useEffect(() => {
        const load = async () => {
            try {
                const resp = await api.get(`/posts/${id}`)
                setPosts(resp.data)
                
            } catch(error) {
                history.push('/404')
            }
        }
        load()
    }, []);

    return {post}
}

