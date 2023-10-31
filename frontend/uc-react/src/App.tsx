import { useState, useEffect } from 'react';
import FeedPost from './FeedPost';

interface Post {
  id: number;
  author: string;
  text: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
	fetch('https://api')
	  .then(async (response) => await response.json())
	  .then((data: Post[]) => {
		setPosts(data);
	  })
	  .catch((error) => {
		console.error('Error al obtener publicaciones:', error);
	  });
  }, []);
  


  return (
    <div className="App">
      <h1>Feed de Publicaciones</h1>
      <PostList posts={posts} />
    </div>
  );
}

function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <FeedPost key={post.id} author={post.author} text={post.text} />
      ))}
    </div>
  );
}

export default App;
