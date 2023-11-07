import { useEffect, useState } from 'react';
import { type PostListResponse } from './types'; // Asegúrate de que la ruta sea correcta
import { getPosts } from '../../services/user.services';

const ShowPost = () => {
	const [posts, setPosts] = useState<PostListResponse | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getPosts();
				setPosts(response);
			} catch (error) {
				// Manejar errores aquí
				console.error('Error al obtener los datos de los posts:', error);
			}
		};

		void fetchData();
	}, []); // [] = se llama solo una vez cuando el componente se monta
	return (
		<div>
			<h1>Listado de Publicaciones</h1>
			{posts?.map((post, index) => (
				<div key={index}>
					<h2>{post.content}</h2>
					<p>Usuario: {post.user.name}</p>
					<p>Fecha: {post.timestamp}</p>
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
