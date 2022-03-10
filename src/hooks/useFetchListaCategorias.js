import { api } from "../api/api";
import { useEffect, useState } from "react";

export default function useFetchListaCategorias() {
    
const [categorias, setCategorias] = useState([]);

useEffect(() => {
    const load = async() => {
        const resp = await api.get('/categorias');
        setCategorias(resp.data);
    }
    load();
}, []);

    return {categorias}
}