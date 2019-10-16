import React, { useState } from 'react';

import Book from './Book';


/*
  Sample book data is provided thanks to Nano Taboada available here:
  https://gist.github.com/nanotaboada/6396437
*/
import booksData from '../data/books.json';

const BookList = (props) => {

  const { books } = props;

  const renderBook = () => booksData.map(book => <Book book={book} key={book.isbn}/>)

  return(
    {renderBook()}
  );

}

export default BookList;
