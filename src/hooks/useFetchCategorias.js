import { useState, useEffect } from 'react';
import { api } from '../api/api';

export default function useFetchCategorias(id) {

    const [subcategorias, setSubcategorias] = useState([])

    useEffect(() => {
        const load = async() => {
            const resp = await api.get(`/categorias/${id}`)
            setSubcategorias(resp.data.subcategorias)
       }
       load()
    }, [id])

    return {subcategorias}
    
}