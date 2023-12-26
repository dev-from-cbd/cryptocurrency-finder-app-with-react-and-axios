import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);

  return (
    <div className="App">
      <h1 className="title">Hello React!!</h1>
    </div>
  );
}

export default App;
