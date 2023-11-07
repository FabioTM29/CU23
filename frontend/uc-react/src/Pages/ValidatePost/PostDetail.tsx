import type React from "react";
import { type Post } from "../ShowPost/types";

interface PostDetailProps {
  post: Post | null;
  onAccept: () => void; // Función para aceptar la publicación
  onReject: () => void; // Función para rechazar la publicación
}

const PostDetail: React.FC<PostDetailProps> = ({ post, onAccept, onReject }) => {
  if (post == null) {
    return <div>Selecciona una publicación para ver los detalles.</div>;
  }

  const handleAccept = () => {
    onAccept();
  };

  const handleReject = () => {
    onReject();
  };

  return (
    <div>
      <h2>Detalles de la Publicación</h2>
      <p>Contenido: {post.content}</p>
      <p>Usuario: {post.user.name}</p>
      <p>Fecha de publicación: {post.timestamp}</p>
      <p>Estado: {post.status}</p>
      <h3>Imágenes</h3>
      <ul>
        {post.pictures.map((picture, index) => (
          <li key={index}>
            <img src={picture} alt={`Imagen ${index}`} />
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handleAccept}>Aceptar</button>
        <button onClick={handleReject}>Rechazar</button>
      </div>
    </div>
  );
};

export default PostDetail;
