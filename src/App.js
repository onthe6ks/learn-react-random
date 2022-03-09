import "./styles.css";
import "./spinkit.css";

import React, { useState } from "react";
import { SpinkitSample } from "./sample/SpinkitSample";

export default function App() {
  //定数
  // ローディング時間　ms
  const LOADING_DiSPLAY_TIME = 3000;

  //ランダムで表示するリスト
  const randomList = [
    "北海道",
    "青森",
    "岩手",
    "宮城",
    "秋田",
    "山形",
    "福島",
    "茨城",
    "栃木",
    "群馬",
    "埼玉",
    "千葉",
    "東京",
    "神奈川",
    "新潟",
    "富山",
    "石川",
    "福井",
    "山梨",
    "長野",
    "岐阜",
    "静岡",
    "愛知",
    "三重",
    "滋賀",
    "京都",
    "大阪",
    "兵庫",
    "奈良",
    "和歌山",
    "鳥取",
    "島根",
    "岡山",
    "広島",
    "山口",
    "徳島",
    "香川",
    "愛媛",
    "高知",
    "福岡",
    "佐賀",
    "長崎",
    "熊本",
    "大分",
    "宮崎",
    "鹿児島",
    "沖縄"
  ];

  // state
  const [randomItem, setRandomItem] = useState("where do you want to go ?");
  const [displayFlag, setDisplayFlag] = useState(true);

  const onButton = () => {
    const tmpRadom = Math.random() * randomList.length;
    setDisplayFlag(false);
    console.log(tmpRadom);
    setTimeout(() => setDisplayFlag(true), LOADING_DiSPLAY_TIME);
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
      <button onClick={onButton}>ランダムで都道府県を表示</button>
      {/* <SpinkitSample /> */}
    </div>
  );
}
