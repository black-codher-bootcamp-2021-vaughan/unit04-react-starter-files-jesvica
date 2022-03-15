import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {

  const { id,
    saleInfo: {retailPrice},
    volumeInfo: {title, authors, description,
    imageLinks: {thumbnail}
    }
  } = props.book;

  return (
    <div className="book">
      <img src={thumbnail} alt="thumbnail"/>
      <div>
      <h2 title={title}>{title}</h2>
      <p authors={authors}>
        by {authors ? authors.join(', ') : "No authors listed."}
      </p>
      <p description={description}>{description}</p>
      <button onClick={() => addBook(props.title)}> Add +</button>
    </div>
    </div>
  ) 
}

Book.propTypes = {
  volumeInfo: PropTypes.shape({title: PropTypes.string.isRequired}),
  authors: PropTypes.array.isRequired,
  description: PropTypes.string,
  price: PropTypes.number
 };

 Book.defaultProps = {description: "No description"};
 Book.defaultProps = {price: "No price provided"};

function addBook(title) {
  console.log(`The book ${title} was clicked`);
}

export default Book;
