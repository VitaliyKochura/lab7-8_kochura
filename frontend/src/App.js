import axios from "axios";
import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App () {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("/api/users").then((response) => {
      setData(response.data);
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Without reload!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {data && <p>Response from API: {JSON.stringify(data)}</p>}
      </header>
    </div>
  );
}

export default App;
