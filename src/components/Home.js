import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const eventos = [
    {
      id: 1,
      name: "Evento: TechCon 2023",
      description:
        "O TechCon 2023 é uma conferência de tecnologia de renome mundial, reunindo os maiores especialistas em inteligência artificial, blockchain, realidade virtual e muito mais."
    },
    {
      id: 2,
      name: "Evento: Festival de Arte Urbana",
      description:
        "O Festival de Arte Urbana é um encontro anual de artistas de rua de todo o mundo. Durante uma semana, nossa cidade se transforma em um museu ao ar livre."
    },
    {
      id: 3,
      name: "Evento: Conferência de Bem-Estar",
      description:
        "A Conferência de Bem-Estar é um evento de três dias dedicado ao equilíbrio e à saúde mental."
    }
  ];

  return (
    <div>
      <h2>Escolha um evento:</h2>
      <ul className="store-list">
        {eventos.map((evento) => (
          <li className="store-item" key={evento.id}>
            <h3 className="store-name">{evento.name}</h3>
            <p className="store-description">{evento.description}</p>
            <Link
              to={`/evento/${evento.id}/${evento.name}`}
              className="store-link"
            >
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
