import { Link } from 'react-router-dom'
import './Perguntas.css'

const listaDePerguntas = [
    {
        pergunta: "O que é um chá de panela?",
        resposta: "É uma comemoração para ajudar os noivos ou a nova moradia com itens para a casa, como panelas, utensílios e enxoval."
    },
    {
        pergunta: "Preciso confirmar presença?",
        resposta: "Sim! Use a página de Cadastrar para confirmar sua presença e contar o que pretende trazer."
    },
    {
        pergunta: "Sou obrigado(a) a levar um presente?",
        resposta: "Não é obrigatório. O mais importante é a sua presença. Mas se quiser ajudar, veja nossas ideias na página de Sugestões."
    },
    {
        pergunta: "Posso levar acompanhante?",
        resposta: "Pode sim! Basta avisar no cadastro ou falar diretamente com a gente pelo WhatsApp."
    },
    {
        pergunta: "Como faço para ver quem já confirmou presença?",
        resposta: "Acesse a página de Convidados para ver a lista de todos que já se cadastraram."
    },
    {
        pergunta: "Haverá estacionamento no local?",
        resposta: "Sim, o local conta com vagas próximas. Mais detalhes serão enviados junto ao endereço."
    },
]

export default function Perguntas() {
    return (
        <main className="containerPerguntas">
            <h1>❓ Perguntas Frequentes</h1>
            <Link to="/">Voltar para Home</Link>

            <section className="contentPerguntas">
                {listaDePerguntas.map((item, indice) => (
                    <details key={indice} className="perguntaItem">
                        <summary>{item.pergunta}</summary>
                        <p>{item.resposta}</p>
                    </details>
                ))}
            </section>

            <p className="duvidaExtra">
                Ainda ficou com alguma dúvida? Fale com a gente pelo WhatsApp 💬
            </p>
        </main>
    )
}
