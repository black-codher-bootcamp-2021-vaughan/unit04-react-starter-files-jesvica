import React from 'react';
import './BookCounter.css';

const BookCounter = (props) => {

  return (
    <main>
      <h2>{props.library.name}'s Books</h2>

      <button onClick={() => props.refreshBooks()}>Refresh Books</button>

      {
      props.library.books.map((book) => (
        <div>
        <img src={book.volumeInfo.imageLinks.thumbnail} alt=""/> 
        <h3>{book.volumeInfo.title}</h3>
        <h4>{book.volumeInfo.authors}</h4>
        <p>{book.volumeInfo.retailPrice}</p>
        <p>{book.volumeInfo.description}</p>
        </div>
      ))
      }

    </main>
  );
}

export default BookCounter;
