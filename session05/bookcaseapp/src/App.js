import React from 'react';
import Book from './components/Book';
import bookList from './models/books.json';
import PropTypes from 'prop-types';

function App() {
  const books = bookList;
  
  return (
  <div className = "App">
  {books.map(bookItem => <Book book={bookItem}/>)};
  </div>)
}

export default App;

