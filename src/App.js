import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

export function Article() {
  return (
    <article>
      <h2 className="article__title">first steps with React</h2>
      <label htmlFor="messages">messages</label>
      <input id="messages"></input>
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        More information about react
      </a>
    </article>
  );
}
