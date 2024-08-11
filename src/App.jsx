import { useState } from "react";
import "./App.css";
import ThreadList from "./ThreadList";

const App = () => {
  return (
    <>
      <div>
        <header>
          <h1>掲示板</h1>
          <a href="#">スレッドを立てる</a>
        </header>
        <ThreadList />
      </div>
    </>
  );
};

export default App;
