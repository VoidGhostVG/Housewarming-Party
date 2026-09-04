import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Cadastrar.css'

const STORAGE_KEY = "cha-de-panela-convidados"

export default function Cadastrar() {

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        oQueVaiLevar: ""
    })

    const [enviado, setEnviado] = useState(false)

    function handleChange(evento) {
        const { name, value } = evento.target
        setFormData(dadosAnteriores => ({
            ...dadosAnteriores,
            [name]: value
        }))
    }

    function handleSubmit(evento) {
        evento.preventDefault()

        const convidadosSalvos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

        const novoConvidado = {
            id: Date.now(),
            ...formData
        }

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify([...convidadosSalvos, novoConvidado])
        )

        setFormData({ nome: "", email: "", telefone: "", oQueVaiLevar: "" })
        setEnviado(true)
    }

    return (
        <main className="containerCadastrar">
            <h1>💌 Confirme sua presença</h1>

            {enviado && (
                <div className="mensagemSucesso">
                    Cadastro feito com muito carinho! Obrigada por fazer parte do nosso chá 💗
                    <br />
                    <Link to="/convidados">Ver lista de convidados</Link>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <article className="form-control">
                    <label htmlFor="nome">Nome</label>
                    <input type="text"
                        id="nome"
                        name="nome"
                        placeholder="Digite seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required />
                </article>

                <article className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email"
                        id="email"
                        name="email"
                        placeholder="Digite seu email"
                        value={formData.email}
                        onChange={handleChange}
                        required />
                </article>

                <article className="form-control">
                    <label htmlFor="telefone">Telefone</label>
                    <input type="tel"
                        id="telefone"
                        name="telefone"
                        placeholder="Digite seu telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        required />
                </article>

                <article className="form-control">
                    <label htmlFor="oQueVaiLevar">O que você vai levar?</label>
                    <input type="text"
                        id="oQueVaiLevar"
                        name="oQueVaiLevar"
                        placeholder="Ex: jogo de panelas, toalhas..."
                        value={formData.oQueVaiLevar}
                        onChange={handleChange}
                        required />
                </article>

                <button type="submit">Cadastrar 💕</button>
            </form>

            <p className="dica-sugestoes">
                Sem ideias do que levar? <Link to="/sugestoes">Veja nossas sugestões</Link>
            </p>
        </main>
    )
}
