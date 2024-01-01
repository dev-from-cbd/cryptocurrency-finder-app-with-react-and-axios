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
        placeholder="Enter a name of Crypto"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <table>
        <thead>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Symbol</td>
            <td>Market Cap</td>
            <td>Price</td>
            <td>Available Supply</td>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default App;
