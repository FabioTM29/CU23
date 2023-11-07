import { PostStatus, type Post } from '../ShowPost/types';
import type React from 'react';
import { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import { getValidatePosts } from '../../services/user.services';

const ValidatePost: React.FC = () => {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);

	const handleAccept = () => {
		if (selectedPost != null) {
			setSelectedPost({ ...selectedPost, status: PostStatus.ACCEPTED });
			// put : actualizar el PostStatus de ese post del lado del backend
		}
	};

	const handleReject = () => {
		if (selectedPost != null) {
			setSelectedPost({ ...selectedPost, status: PostStatus.REJECTED });
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getValidatePosts();
				setPosts(response);
			} catch (error) {
				console.error('Error al obtener la lista de posts', error);
			}
		};

		void fetchData();
	}, []); // Se llama una vez cuando el componente se monta

	const handlePostClick = (post: Post) => {
		setSelectedPost(post);
	};
	return (
		<div>
			<h1>Listado de Publicaciones a Validar</h1>
			{posts?.map((post, index) => (
				<div
					key={index}
					onClick={() => {
						handlePostClick(post);
					}}
				>
					<ul>
						{post.pictures[0] !== '' && (
							<li>
								<img src={post.pictures[0]} />
							</li>
						)}
					</ul>
					<p>Usuario: {post.user.name}</p>
				</div>
			))}
			<PostDetail
				post={selectedPost}
				onAccept={handleAccept}
				onReject={handleReject}
			/>
		</div>
	);
};

export default ValidatePost;
