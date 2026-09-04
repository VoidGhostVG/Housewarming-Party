import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Convidados.css'

const STORAGE_KEY = "cha-de-panela-convidados"

export default function Convidados() {
  const [convidados, setConvidados] = useState([])
  const [editandoId, setEditandoId] = useState(null)
  const [formEdicao, setFormEdicao] = useState({
    nome: "",
    email: "",
    telefone: "",
    oQueVaiLevar: ""
  })

  useEffect(() => {
    const dadosSalvos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []
    setConvidados(dadosSalvos)
  }, [])

  function salvarNoStorage(novaLista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(novaLista))
    setConvidados(novaLista)
  }

  function handleExcluir(id) {
    const confirmar = window.confirm("Tem certeza que deseja excluir esse cadastro?")
    if (!confirmar) return

    const novaLista = convidados.filter(convidado => convidado.id !== id)
    salvarNoStorage(novaLista)
  }

  function handleIniciarEdicao(convidado) {
    setEditandoId(convidado.id)
    setFormEdicao({
      nome: convidado.nome,
      email: convidado.email,
      telefone: convidado.telefone,
      oQueVaiLevar: convidado.oQueVaiLevar
    })
  }

  function handleCancelarEdicao() {
    setEditandoId(null)
  }

  function handleChangeEdicao(evento) {
    const { name, value } = evento.target
    setFormEdicao(dadosAnteriores => ({
      ...dadosAnteriores,
      [name]: value
    }))
  }

  function handleSalvarEdicao(evento, id) {
    evento.preventDefault()

    const novaLista = convidados.map(convidado =>
      convidado.id === id
        ? { ...convidado, ...formEdicao }
        : convidado
    )

    salvarNoStorage(novaLista)
    setEditandoId(null)
  }

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

              {editandoId === convidado.id ? (
                <form
                  className="formEdicao"
                  onSubmit={(evento) => handleSalvarEdicao(evento, convidado.id)}
                >
                  <input
                    type="text"
                    name="nome"
                    value={formEdicao.nome}
                    onChange={handleChangeEdicao}
                    placeholder="Nome"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formEdicao.email}
                    onChange={handleChangeEdicao}
                    placeholder="Email"
                    required
                  />
                  <input
                    type="tel"
                    name="telefone"
                    value={formEdicao.telefone}
                    onChange={handleChangeEdicao}
                    placeholder="Telefone"
                    required
                  />
                  <input
                    type="text"
                    name="oQueVaiLevar"
                    value={formEdicao.oQueVaiLevar}
                    onChange={handleChangeEdicao}
                    placeholder="O que vai levar"
                    required
                  />

                  <div className="botoesEdicao">
                    <button type="submit" className="botaoSalvar">Salvar</button>
                    <button type="button" className="botaoCancelar" onClick={handleCancelarEdicao}>
                      Cancelar
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <strong>Nome: </strong> <span>{convidado.nome}</span>
                  <strong>Email: </strong> <span>{convidado.email}</span>
                  <strong>Telefone: </strong> <span>{convidado.telefone}</span>
                  <strong>Vai levar: </strong> <span>{convidado.oQueVaiLevar}</span>

                  <div className="botoesCard">
                    <button className="botaoEditar" onClick={() => handleIniciarEdicao(convidado)}>
                      ✏️ Editar
                    </button>
                    <button className="botaoExcluir" onClick={() => handleExcluir(convidado.id)}>
                      🗑️ Excluir
                    </button>
                  </div>
                </>
              )}

            </article>
          ))}
        </section>
      )}
    </main>
  )
}