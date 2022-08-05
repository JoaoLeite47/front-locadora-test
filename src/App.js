import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    fetch("/").then((res) =>
      res.json().then((data) => {
        console.log(data);
      })
    );
  }, []);

  return <div className="App"></div>;
}

export default App;
