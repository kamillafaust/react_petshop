import React, { useEffect, useState } from 'react'
import { api } from '../api/api'


import '../assets/css/componentes/cartao.css'

const Sobre = () => {
const [about, setAbout] = useState("")

  useEffect(() => {
    const load = async () => {
      const res = await api.get("/about")
      setAbout(res.data)
    }
    load()
  }, [])

  return (
    <main>
      <div className="container">
        <h2 className="titulo-pagina">Sobre Doguito</h2>
        {console.log(about)}
        <h4>{about.title}</h4>
      </div>
      <section className="container flex flex--centro">
        <article className="cartao">
          O blog do doguito foi criado para tirar diversas dúvidas sobre o mundo pet!!!
        </article>   
      </section>
    </main>
  )
}

export default Sobre
