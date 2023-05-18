import { useState } from "react";
import { books } from "./data";

export function Books() {
  const [allGenre, setAllGenre] = useState(true);
  const [classics, setClassics] = useState(false);
  const [dystopian, setDystopian] = useState(false);
  const [youngAdult, setYoungAdult] = useState(false);

  function showAllGenre() {
    setAllGenre(true);
    setClassics(false);
    setDystopian(false);
    setYoungAdult(false);
  }

  function showClassics() {
    setClassics(true);
    setAllGenre(false);
    setDystopian(false);
    setYoungAdult(false);
  }

  function showDystopian() {
    setClassics(false);
    setAllGenre(false);
    setDystopian(true);
    setYoungAdult(false);
  }

  function showYoungAdult() {
    setClassics(false);
    setAllGenre(false);
    setDystopian(false);
    setYoungAdult(true);
  }

  return (
    <div>
      <button onClick={showAllGenre}>All Genres</button>
      <button onClick={showClassics}>Classics</button>
      <button onClick={showDystopian}>Dystopian</button>
      <button onClick={showYoungAdult}>Young Adult</button>
      <ul>
        {allGenre &&
          books.map((book) => (
            <li style={{ listStyle: "none" }}>
              <p>
                <b>{book.title}</b>
              </p>
              <p> {book.author} </p>
            </li>
          ))}
      </ul>
      <ul>
        {classics &&
          books
            .filter((book) => book.genre === "Classic")
            .map((book) => (
              <li style={{ listStyle: "none" }}>
                <p>
                  <b>{book.title}</b>
                </p>
                <p> {book.author} </p>
              </li>
            ))}
      </ul>
      <ul>
        {dystopian &&
          books
            .filter((book) => book.genre === "Dystopian")
            .map((book) => (
              <li style={{ listStyle: "none" }}>
                <p>
                  <b>{book.title}</b>
                </p>
                <p> {book.author} </p>
              </li>
            ))}
      </ul>
      <ul>
        {youngAdult &&
          books
            .filter((book) => book.genre === "Young Adult")
            .map((book) => (
              <li style={{ listStyle: "none" }}>
                <p>
                  <b>{book.title}</b>
                </p>
                <p> {book.author} </p>
              </li>
            ))}
      </ul>
    </div>
  );
}
