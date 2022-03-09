import React from 'react';
import ListaCategorias from '../componentes/ListaCategorias';
import ListaPost from '../componentes/ListaPost';
import { Route, useParams, useRouteMatch } from 'react-router';
import { api } from '../api/api';
import { Link } from 'react-router-dom';
import useFetchCategorias from '../hooks/useFetchCategorias';

const Categorias = () => {
    
    const { id } = useParams() //para dizer que o id do path em App, é o mesmo que o da linha 27
    const { url, path } = useRouteMatch() //ele sabe em qual rota está clicado. Ex: se bem-estar ou comportamento. É uma busca na url da página

    //const {subcategorias} = useFetchCategorias(id) --FAZER ASSIM
    const response = useFetchCategorias(id)
    
    return (
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias/>

            <ul className="lista-categorias container flex">
                {
                    response.subcategorias.map((subcategoria) => (
                        <li className={`lista-categorias__categoria
                        lista-categorias__categoria--${id}`}  key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>

            <Route exact path={`${path}`} >
                <ListaPost url={`/posts?categoria=${id}`}/>
            </Route>          
        </>
    );
}

export default Categorias;