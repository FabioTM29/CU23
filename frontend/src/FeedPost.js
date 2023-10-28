import React from 'react';

function FeedPost({ author, text }) {
  return (
    <div className="post">
      <p>Autor: {author}</p>
      <p>{text}</p>
    </div>
  );
}


export default FeedPost;
