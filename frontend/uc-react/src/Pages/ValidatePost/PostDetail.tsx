import type React from 'react';
import { type Post } from '../ShowPost/types';

interface PostDetailProps {
	post: Post | null;
	onAccept: () => Promise<void>;
	onReject: () => Promise<void>;
}

const PostDetail: React.FC<PostDetailProps> = ({
	post,
	onAccept,
	onReject,
}) => {
	if (post == null) {
		return <div>Select a post to show its details</div>;
	}

	const handleAccept = async () => {
		await onAccept();
	};

	const handleReject = async () => {
		await onReject();
	};

	return (
		<div>
			<h2>Detalles de la Publicación</h2>
			<p>Contenido: {post.content}</p>
			{/* <p>Usuario: {post.user.name}</p> */}
			<p>Fecha de publicación: {post.postTimestamp.toLocaleDateString()}</p>
			<p>Estado: {post.postStatus}</p>
			<h3>Imágenes</h3>
			<ul>
				{post.pictures.map((picture, index) => (
					<li key={index}>
						<img src={picture.picture} alt={`Imagen ${index}`} />
					</li>
				))}
			</ul>
			<div>
				<button
					onClick={() => {
						void handleAccept();
					}}
				>
					Accept
				</button>

				<button
					onClick={() => {
						void handleReject();
					}}
				>
					Reject
				</button>
			</div>
		</div>
	);
};

export default PostDetail;
