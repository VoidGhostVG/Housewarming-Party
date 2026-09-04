import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Convidados.css'

const STORAGE_KEY = "cha-de-panela-convidados"

export default function Convidados() {
  const [convidados, setConvidados] = useState([])

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    setConvidados(dadosSalvos)
  }, [])

  return (
    <main className="containerConvidados">
      <h1>👭 Nossos Convidados</h1>
      <Link to="/">Voltar para Home</Link>

      {convidados.length === 0 ? (
        <p className="semConvidados">
          Ainda não temos cadastros por aqui. <Link to="/cadastrar">Seja o primeiro a confirmar presença!</Link>
        </p>
      ) : (
        <section className="contentConvidados">
          {convidados.map(convidado => (
            <article key={convidado.id}>
              <strong>Nome: </strong> <span>{convidado.nome}</span>
              <strong>Email: </strong> <span>{convidado.email}</span>
              <strong>Telefone: </strong> <span>{convidado.telefone}</span>
              <strong>Vai levar: </strong> <span>{convidado.oQueVaiLevar}</span>
            </article>
          ))}
        </section>
      )}
    </main>
  )
}
