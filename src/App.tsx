import React, { useState } from "react";

import { TTree } from "./types";
import { VTree } from "./components/VTree";
import { Controls } from "./components/Controls";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [tree, setTree] = useState<TTree | null>(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Controls onTreeCreated={setTree}></Controls>
      </header>
      <section className="App-content">{tree && <VTree tree={tree} />}</section>
    </div>
  );
}

export default App;
