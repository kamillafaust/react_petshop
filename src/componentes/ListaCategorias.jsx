import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/blog.css';
import useFetchListaCategorias from '../hooks/useFetchListaCategorias';

const ListaCategorias = () => {

    const {categorias} = useFetchListaCategorias();

    return (
        <ul className="lista-categorias container flex">
            {
              categorias.map((categoria) => (
                <Link to={`/categoria/${categoria.id}`}>
                    <li className={`lista-categorias__categoria
                    lista-categorias__categoria--${categoria.id}`}>
                        {categoria.nome}
                    </li>
                </Link>
              ))
            }
        </ul>
    );
}

export default ListaCategorias;