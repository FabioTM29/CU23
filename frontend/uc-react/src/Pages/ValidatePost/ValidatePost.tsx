import { PostStatus, type Post } from '../ShowPost/types';
import type React from 'react';
import { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import { getValidatePosts } from '../../services/user.services';
import { doPut } from '../../services/http.services';

const ValidatePost: React.FC = () => {
	const [posts, setPosts] = useState<Post[] | null>(null);
	const [selectedPost, setSelectedPost] = useState<Post | null>(null);

	const handleAccept = async () => {
		if (selectedPost != null) {
		  setSelectedPost({ ...selectedPost, postStatus: PostStatus.ACCEPTED });
		  await doPut(selectedPost.postStatus, selectedPost.id);
		  setSelectedPost(null);
		}
	  };
	  
	  const handleReject = async () => {
		if (selectedPost != null) {
		  setSelectedPost({ ...selectedPost, postStatus: PostStatus.REJECTED });
		  await doPut(selectedPost.postStatus, selectedPost.id);
		  setSelectedPost(null);
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
	}, []); // [] = Called once when the component is mounted

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
						{post.pictures[0].picture !== null && (
							<li>
								<img src={post.pictures[0].picture} />
							</li>
						)}
					</ul>
					{/* <p>Usuario: {post.user.name}</p> */}
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
