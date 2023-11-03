import { type Post } from "./types"; // Asegúrate de que la ruta sea correcta

const ShowPost = ({ posts }: { posts: Post[] }) => {
  return (
    <div>
      <h1>Listado de Publicaciones</h1>
      {posts?.map((post, index) => (
        <div key={index}>
          <h2>{post.content}</h2>
          <p>Usuario: {post.user.name}</p>
          <p>Fecha: {post.timestamp}</p>
          <p>Estado: {post.status}</p>
          <ul>
            {post.pictures.map((picture, pictureIndex) => (
              <li key={pictureIndex}>
                <img src={picture} alt={`Imagen ${pictureIndex}`} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ShowPost;
