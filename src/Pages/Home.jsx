import React from "react";
import { Link } from "react-router-dom";
import Banner from "../Components/Banner";
import Info from "../Components/Info";

export default function Home() {
    return (
        <>
            <Banner />

            <Info />

            <section className="home-cta">
                <p>Ainda não confirmou presença?</p>
                <Link to="/cadastrar" className="home-cta-botao">💌 Fazer meu cadastro</Link>
            </section>
        </>
    )
}
