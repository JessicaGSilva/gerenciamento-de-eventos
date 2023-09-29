import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ParticipanteDetail.css";

function ParticipanteDetail() {
  const {
    participanteId,
    participanteName,
    participanteJob,
    eventoName
  } = useParams();
  const navigate = useNavigate();

  const participante = {
    id: participanteId,
    name: participanteName,
    job: participanteJob
  };

  const handleBack = () => {
    navigate(`/evento/${participante.id}/${eventoName}`);
  };

  return (
    <div className="product-detail-container">
      <h2 className="product-name">{participante.name}</h2>
      <p className="product-description">{participante.job}</p>
      <button onClick={handleBack} className="back-button">
        Voltar para a lista de participantes
      </button>
    </div>
  );
}

export default ParticipanteDetail;
