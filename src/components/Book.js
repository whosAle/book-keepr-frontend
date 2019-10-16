import React, { useState } from 'react';

const Book = (props) => {
  const { book } = props;

  return(
    <div>
      <h1>{book.title}</h1>
    </div>
  );

}

export default Book;
