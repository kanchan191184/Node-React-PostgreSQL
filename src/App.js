import React, { Fragment, useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiState, setapiState] = useState("");

  const [usersState, setusersState] = useState("");

  const [pgdbState, setpgdbState] = useState([]);

  console.log("pgdb data" + pgdbState);

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((apiState) => setapiState(apiState));
  }, []);

  useEffect(() => {
    fetch("http://localhost:9000/users")
      .then((res) => res.text())
      .then((usersState) => setusersState(usersState));
  }, []);

  console.log("First Hello pgdbData from client" + pgdbState);

  useEffect(() => {
    fetch("http://localhost:9000/pgDatabase")
      .then((res) => res.text())
      .then((pgdbState) => setpgdbState(pgdbState));
  }, []);

  console.log("Hello pgdbData from client" + pgdbState);

  return (
    <Fragment>
      <div className="App">
        <p>{apiState}</p>
        <p>{usersState}</p>
        <p>{pgdbState}</p>
        {/* <ul>
          {pgdbState.map(pgdb => (
            <li key={pgdb.id}>{pgdb.name}</li>
          ))}
        </ul> */}
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </Fragment>
  );
}

export default App;
