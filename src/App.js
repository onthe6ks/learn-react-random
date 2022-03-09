import "./styles.css";
import "./spinkit.css";

import React, { useState } from "react";

export default function App() {
  const randomList = ["Tokyo", "Chiba", "Saitama"];

  // state
  const [randomItem, setRandomItem] = useState("where do you want to go ?");
  const [displayFlag, setDisplayFlag] = useState(true);

  const onButton = () => {
    const tmpRadom = Math.random() * randomList.length;
    setDisplayFlag(false);
    console.log(tmpRadom);
    setTimeout(() => setDisplayFlag(true), 2000);
    setRandomItem(randomList[parseInt(tmpRadom, 10)]);
  };

  const ResultArea = () => {
    return (
      <>
        <h1 className="result">{randomItem}</h1>
      </>
    );
  };

  const Loading = () => {
    return (
      <div className="sk-grid">
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
        <div className="sk-grid-cube"></div>
      </div>
    );
  };

  return (
    <div className="App">
      {displayFlag || <Loading />}
      {displayFlag && <ResultArea />}
      <button onClick={onButton}>random</button>
    </div>
  );
}
