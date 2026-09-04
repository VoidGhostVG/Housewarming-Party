import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'


export default function NotFound() {
    return (
        <main className="notfound">
            <div className="notfound__content">
                <p className="notfound__eyebrow">Ops! 💔</p>

                <h1 className="notfound__title">Essa página não foi encontrada no nosso chá.</h1>

                <p className="notfound__text">
                    O endereço que você tentou acessar não existe ou foi movido.
                    Que tal voltar para a Home e continuar por lá?
                </p>

                <div className="notfound__actions">
                    <Link to="/" className="notfound__button notfound__button--primary">
                        Voltar para o início
                    </Link>
                    <Link to="/perguntas" className="notfound__button">
                        Ver perguntas frequentes
                    </Link>
                </div>
            </div>
        </main>
    );
}
