import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/Evento.css";

function Evento() {
  const { eventoId, eventoName } = useParams();
  const navigate = useNavigate();

  const participantes = [
    {
      id: 1,
      name: "Emily Johnson",
      job: "Gerente de Marketing"
    },
    {
      id: 2,
      name: "Robert Smith",
      job: "Instrutor de Arte"
    },
    {
      id: 3,
      name: "Maria Lopez",
      job: "Instrutora de Yoga"
    }
  ];

  const filteredPartipantes = participantes.filter(
    (product) => product.id === parseInt(eventoId, 10)
  );

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="store-container">
      <h2>Participantes do {eventoName}:</h2>
      <ul className="product-list">
        {filteredPartipantes.map((participante) => (
          <li className="product-item" key={participante.id}>
            <h3 className="product-name">{participante.name}</h3>
            <p className="product-description">{participante.job}</p>
            <Link
              to={`/participante/${participante.id}/${participante.name}/${participante.job}/${eventoName}`}
              className="store-link"
            >
              Ver detalhes
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={handleBackToHome} className="back-button">
        Voltar para a página inicial
      </button>
    </div>
  );
}

export default Evento;
