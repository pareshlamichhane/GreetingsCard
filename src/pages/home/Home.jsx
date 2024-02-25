import React from "react";
import "./home.css";
import FestivalSelector from "../../components/FestivalSelector";

function Home() {
  return (
      <div className="App">
            <h1 className="title">Greetings Card</h1>
            <p className="code">Create custom greetings cards and save/send them.</p>
            <FestivalSelector />
      </div>
  );
}

export default Home;