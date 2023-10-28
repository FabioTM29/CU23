import React, { useState, useEffect } from 'react';
import FeedPost from './FeedPost';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    fetch('https://api')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error al obtener publicaciones:', error));
  }, []);

  return (
    <div className="App">
      <h1>Feed de Publicaciones</h1>
      <PostList posts={posts} />
    </div>
  );
}

function PostList({ posts }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <FeedPost key={post.id} author={post.author} text={post.text} />
      ))}
    </div>
  );
}

export default App;
