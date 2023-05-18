//Given an array of books

//a. Build a React component that displays the title and author of each book.

//b. Add buttons to filter the books by genre using the useState hook.

import { Books } from "./Books";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Books />
    </div>
  );
}
