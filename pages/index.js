import React from "react";
import Menu from "./Menu";

export default function App() {
  return (
    <>
			{/*ダイアログを表示するDOM要素*/}
      <div id="dialog" />
      <div className="App">
        <Menu />
      </div>
    </>
  );
}