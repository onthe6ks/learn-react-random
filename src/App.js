import "./styles.css";
import "./spinkit.css";

import React, { useState } from "react";
import { SpinkitSample } from "./sample/SpinkitSample";

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
      <>
        <div className="sk-wander sk-center">
          <div className="sk-wander-cube"></div>
          <div className="sk-wander-cube"></div>
          <div className="sk-wander-cube"></div>
        </div>
      </>
    );
  };

  return (
    <div className="App">
      {displayFlag || <Loading />}
      {displayFlag && <ResultArea />}
      <button onClick={onButton}>random</button>
      {/* <SpinkitSample /> */}
    </div>
  );
}
