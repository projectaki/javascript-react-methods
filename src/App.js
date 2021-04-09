import { useEffect, useState } from "react";
import "./App.css";
import { PrefixTree } from "./PrefixTree/PrefixTree";
import data from "./topmovies.json";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const pT = new PrefixTree();
    for (let item of data) {
      pT.addWord(item);
    }
    const res = pT.listPossibilities("gab", 10);
    setResults(res);
  }, []);

  useEffect(() => {
    results.length !== 0 && console.log(results);
  }, [results]);

  return (
    <>
      <form>
        <input
          type="search"
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate (-50%, -50%)",
          }}
        ></input>
      </form>
    </>
  );
}

export default App;
