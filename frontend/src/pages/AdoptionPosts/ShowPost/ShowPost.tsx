import { useEffect, useState } from 'react';
import { type PostListResponse } from './types';
import { getPosts } from '@/services/user.service';

const ShowPost = () => {
	const [posts, setPosts] = useState<PostListResponse | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await getPosts();
				setPosts(response);
			} catch (error) {
				console.error('Failed to get posts list: ', error);
			}
		};

		void fetchData();
	}, []);
	return (
		<div>
			<h1>Posts Lists</h1>
			{posts?.map((post, index) => (
				<div key={index}>
					<h2>Post Details</h2>
					<p>Content: {post.content}</p>
					<p>Post Date : {post.postTimestamp.toLocaleDateString()}</p>
					<p>Region: {post.region}</p>
					<p>Pet Name: {post.petName}</p>
					<p>Description: {post.description}</p>
					<p>Gender: {post.gender}</p>
					<p>Pet Age: {post.petAge}</p>
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
