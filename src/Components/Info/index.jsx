import "./Info.css"

const Info = (props) => {
    return (
        <section className="info-secao">
            <article>
                <span className="info-icone">📅</span>
                <h2>Data</h2>
                <p>11/09/2027 - às 15:00, contamos com a sua presença!</p>
            </article>

            <article>
                <span className="info-icone">📍</span>
                <h2>Local</h2>
                <p>Rua Orquídea, 29 - Jardim das Flores, Osasco - SP, 06112-070.</p>
            </article>

            <article>
                <span className="info-icone">🎁</span>
                <h2>Como ajudar?</h2>
                <p>Faça seu cadastro contando o que pretende trazer, traga a sua alegria e, o principal, se divirta!</p>
            </article>
        </section>
    )
}

export default Info
