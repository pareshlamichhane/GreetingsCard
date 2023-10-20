import React from "react";
import "./home.css";
import CardGenerator from "../../components/CardGenerator";
import FestivalSelector from "../../components/FestivalSelector";

function Home() {
  return (
      <div className="App">
        <header className="App-header">
          <body>
            <h1 className="title">Greetings Card</h1>
            <p className="code">Create custom greetings cards and save/send them.</p>
            <FestivalSelector />
            <CardGenerator />
          </body>
        </header>
      </div>
  );
}

export default Home;