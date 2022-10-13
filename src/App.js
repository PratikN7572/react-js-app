import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Custom from "./components/CustomComp";
import ClassComponent from "./components/classComponent";
import Pure from "./components/pureComp";
import Fragment from "./components/htmlFragments";

const Customizeable = () =>
  React.createElement(
    "span",
    {
      className: "element",
      style: {
        color: "green",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    <Custom />
  );
const App = () => {
  const data = {
    name: "test",
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>This is the page from App.js</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <div>
          {/* conditional rendering */}
          {data?.name && <Fragment />}
          {data?.id ? <ClassComponent /> : <Pure />}
          <Custom
            id={"id"}
            styleProps={{ fontSize: "40px" }}
            classProps={"testClass"}
          />
          <Customizeable />
        </div>
      </div>
      <h1>Hello There!</h1>
    </>
  );
};

export default App;
