import { type AdoptionPost } from '../ShowPost/types';
import type React from 'react';
import { useEffect, useState } from 'react';
import PostDetail from './PostDetail';
import { getReviewingPosts } from '@/services/user.service';
import { doPut } from '@/services/http.service';

const ValidatePost: React.FC = () => {
	const [posts, setPosts] = useState<AdoptionPost[] | null>(null);
	const [selectedPost, setSelectedPost] = useState<AdoptionPost | null>(null);

	const handleAccept = async () => {
		if (selectedPost != null) {
			setSelectedPost({ ...selectedPost, postStatus: 'ACCEPTED' });
			await doPut(selectedPost.postStatus, selectedPost.postId);
			setSelectedPost(null);
		}
	};

	const handleReject = async () => {
		if (selectedPost != null) {
			setSelectedPost({ ...selectedPost, postStatus: 'REJECTED' });
			await doPut(selectedPost.postStatus, selectedPost.postId);
			setSelectedPost(null);
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getReviewingPosts();
				setPosts(response);
			} catch (error) {
				console.error('Failed to get posts list', error);
			}
		};

		void fetchData();
	}, []); // [] = Called once when the component is mounted

	const handlePostClick = (post: AdoptionPost) => {
		setSelectedPost(post);
	};
	return (
		<div>
			<h1>List of Posts to Validate</h1>
			{Array.isArray(posts) &&
				posts.map((post, index) => (
					<div
						key={index}
						onClick={() => {
							handlePostClick(post);
						}}
					>
						{/* Renderizar contenido del post aquí */}
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
