
interface FeedPostProps {
  author: string;
  text: string;
}

function FeedPost({ author, text }: FeedPostProps) {
  return (
    <div className="post">
      <p>Autor: {author}</p>
      <p>{text}</p>
    </div>
  );
}

export default FeedPost;
