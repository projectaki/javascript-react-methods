import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {}, []);

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
