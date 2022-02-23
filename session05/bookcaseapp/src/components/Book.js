import React from 'react';
import App from '../App';
import PropTypes from 'prop-types';




const Book = (props) => {

  const { id,
    saleInfo: {retailPrice},
    volumeInfo: {title, authors, description,
    imageLinks: {thumbnail}
    }
  } = props.book;

  return (
    <div>
      <h2>{title}</h2>
      <img src={thumbnail} alt="thumbnail"/>
      <p>
        by { authors ? authors.join(', ') : "No authors listed."}
      </p>
      <p>{description}</p>
    </div>
  ) 
}

Book.propTypes = {
  volumeInfo: PropTypes.shape({title: PropTypes.string.isRequired}),
  authors: PropTypes.array.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired
 };


 

export default Book;
