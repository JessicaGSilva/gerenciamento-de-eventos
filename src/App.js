import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";

import Home from "./components/Home";
import Evento from "./components/Evento";
import ParticipanteDetail from "./components/ParticipanteDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <h1>Gerenciamento de Eventos</h1>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Evento/:eventoId/:eventoName" element={<Evento />} />
            <Route
              path="/participante/:participanteId/:participanteName/:participanteJob/:eventoName"
              element={<ParticipanteDetail />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
