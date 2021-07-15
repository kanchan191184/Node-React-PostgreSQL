import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [apiState, setapiState] = React.useState("");

  const [usersState, setusersState] = React.useState("");

  const [pgdbState, setpgdbState] = React.useState();

  console.log("pgdb data" + pgdbState);

  React.useEffect(() => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((apiState) => setapiState(apiState));
  }, []);

  React.useEffect(
    () => {
      fetch("http://localhost:9000/users")
        .then((res) => res.text())
        .then((usersState) => setusersState(usersState));
    },
    // console.log("Hello" + usersState),
    []
  );

  React.useEffect(() => {
    fetch("http://localhost:9000/pgDatabase")
      .then((res) => res.text())
      .then((pgdbState) => setpgdbState(pgdbState));
  }, []);

  // const pgdb = pgdbState.map((i) => {
  //   console.log("pgdb from client" + pgdb);
  //   return <h1>{i.value}</h1>;
  // });
  console.log("Hello pgdbData from client" + pgdbState);

  return (
    <Fragment>
      <div className="App">
        <p>{apiState}</p>
        <p>{usersState}</p>
        <p>{pgdbState}</p>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        {/* <ul>
        {pgdbState.map((pgdb) => {
          return (
            <li key={pgdb.Id}>
              <h3>{pgdb.Name}</h3>
            </li>
          );
        })}
      </ul> */}
      </div>
    </Fragment>
  );
}

export default App;
