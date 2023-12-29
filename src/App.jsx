import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState([]);

  return (
    <div className="App">
      <h1 className="title">
        Cryptocurrency Finder Web App with React JS and Axios
      </h1>
      <input
        type="text"
        placeholder="Please write needed name of Crypto or Token"
      />
    </div>
  );
}

export default App;
