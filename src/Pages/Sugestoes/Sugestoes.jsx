import React from "react";
import "./Sugestoes.css";
import imagemSugestoes from "../../assets/suggestions_real.jpeg"

const Cozinha = [
  { nome: "Jogo de panelas", descricao: "Panelas antiaderentes de vários tamanhos." },
  { nome: "Talheres", descricao: "Jogo de talheres completo." },
  { nome: "Liquidificador", descricao: "Para vitaminas e sucos do dia a dia." },
  { nome: "Jogo de potes", descricao: "Potes herméticos para guardar alimentos." },
  { nome: "Panos de prato", descricao: "Um kit de panos de prato fofos." },
];

const CasaEDecoracao = [
  { nome: "Jogo de cama", descricao: "Lençóis e fronhas para o casal." },
  { nome: "Toalhas de banho", descricao: "Toalhas macias em tons neutros." },
  { nome: "Enfeites e velas", descricao: "Itens de decoração para deixar a casa aconchegante." },
  { nome: "Cesto organizador", descricao: "Para organizar roupas ou objetos." },
];

const Outros = [
  { nome: "Vale-presente", descricao: "Sempre bem-vindo para completar a lista!" },
  { nome: "Plantinha", descricao: "Para trazer um verde especial para o novo lar." },
  { nome: "Surpresa", descricao: "Sinta-se livre para trazer aquilo que combina com a gente 💗" },
];

function CardSugestao({ item }) {
  return (
    <article className="sugestao-card">
      <h3>{item.nome}</h3>
      <p>{item.descricao}</p>
    </article>
  );
}

function Categoria({ titulo, itens }) {
  return (
    <section className="sugestao-categoria">
      <h2>{titulo}</h2>
      <div className="sugestao-grid">
        {itens.map((item) => (
          <CardSugestao key={item.nome} item={item} />
        ))}
      </div>
    </section>
  );
}

export default function Sugestoes() {
  return (
    <div className="sugestoes-container">

      <div className="sugestoes-layout">

        <aside className="sugestoes-imagem">
          <img
            src={imagemSugestoes}
            alt="Utensílios de cozinha para o chá de panela"
          />
        </aside>

        <main className="sugestoes-main">
          <Categoria titulo="🍳 Cozinha" itens={Cozinha} />
          <Categoria titulo="🛋️ Casa e Decoração" itens={CasaEDecoracao} />
          <Categoria titulo="✨ Outras ideias" itens={Outros} />
        </main>

      </div>
    </div>
  );
}