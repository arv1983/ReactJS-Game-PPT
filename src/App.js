/* eslint-disable react-hooks/exhaustive-deps */
import "./App.css";

import React, { useState, useEffect } from "react";

const App = () => {
  const [escolhaHumano, setEscolhaHumano] = useState("escolha");
  const [escolhaPc, setEscolhaPc] = useState("escolha");
  const [placarPc, setPlacarPc] = useState(0);
  const [placarVc, setPlacarVc] = useState(0);
  const [joga, setJogar] = useState("");
  const [PPT, setPPT] = useState("");

  useEffect(() => {
    if (escolhaHumano !== "escolha") {
      let sorteio = Math.floor(Math.random() * 3);
      if (sorteio === 0) {
        sorteio = "Pedra";
        setEscolhaPc("Pedra");
      }
      if (sorteio === 1) {
        sorteio = "Papel";
        setEscolhaPc("Papel");
      }
      if (sorteio === 2) {
        sorteio = "Tesoura";
        setEscolhaPc("Tesoura");
      }
      console.log(sorteio + " e " + escolhaHumano);
      if (sorteio === escolhaHumano) {
        console.log("empate");
      } else {
        if (
          (sorteio === "Pedra" && escolhaHumano === "Tesoura") ||
          (sorteio === "Papel" && escolhaHumano === "Pedra") ||
          (sorteio === "Tesoura" && escolhaHumano === "Papel")
        ) {
          console.log("PCganha");
          pcGanha();
        } else {
          console.log("VCganha");
          vcGanha();
        }
      }
    }
  }, [escolhaHumano]);

  function pcGanha() {
    setPlacarPc(placarPc + 1);
  }
  function vcGanha() {
    setPlacarVc(placarVc + 1);
  }

  return (
    <div className="App">
      <div className="placar">
        placar:
        <br />
        PC {placarPc} - VC {placarVc}
      </div>
      PC {escolhaPc}
      <hr />
      VC {escolhaHumano}
      <br />
      <br />
      <button
        disabled={joga}
        onClick={() => {
          setJogar("disabled");
          setPPT("");
          setEscolhaHumano("escolha");
          setEscolhaPc("escolha");
        }}
      >
        Jogar novamente
      </button>
      <br /> <br />
      <button
        disabled={PPT}
        onClick={() => {
          setEscolhaHumano("Pedra");
          setPPT("disabled");
          setJogar("");
        }}
      >
        pedra
      </button>
      <button
        disabled={PPT}
        onClick={() => {
          setEscolhaHumano("Papel");
          setPPT("disabled");
          setJogar("");
        }}
      >
        papel
      </button>
      <button
        disabled={PPT}
        onClick={() => {
          setEscolhaHumano("Tesoura");
          setPPT("disabled");
          setJogar("");
        }}
      >
        tesoura
      </button>
    </div>
  );
};

export default App;
