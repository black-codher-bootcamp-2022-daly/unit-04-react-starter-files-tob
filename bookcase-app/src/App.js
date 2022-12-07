import React, { useState } from "react";
import { Link } from "react-router-dom";

import { PimpedBook } from "./components/Book";
import { Search } from "./components/Search";
import data from "./models/books.json";

function App() {
  const [books, setBooks] = useState(data);
  const [keyword, setKeyword] = useState("");

  async function findBooks(value) {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${value}&filter=paid-ebooks&print-type=books&projection=lite`;

    const results = await fetch(url).then((res) => res.json());
    if (!results.error) {
      setBooks(results.items);
    }
  }

  return (
      <Booklist>
        <Search
          keyword={keyword}
          setKeyword={setKeyword}
          handleSubmit={findBooks}
        />
        {books.map((item) => (
          <PimpedBook>
            <h2>{item.volumeInfo.title}</h2>
            <p>{item.volumeInfo.description}</p>
          </PimpedBook>
        ))}
      </Booklist>
  );
}

function Booklist(props) {
  return (
    <div>
      <h1>
        <Link to="/">Tobia's library</Link>
      </h1>
      <div className="booklist-container">{props.children}</div>
    </div>
  );
}

export default App;
