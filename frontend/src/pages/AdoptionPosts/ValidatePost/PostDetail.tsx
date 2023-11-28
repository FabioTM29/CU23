import type React from 'react';
import { type AdoptionPost } from '../ShowPost/types';

interface PostDetailProps {
	post: AdoptionPost | null;
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
			<h2>Post Details</h2>
			<p>Content: {post.content}</p>
			<p>Post Date : {post.postTimestamp.toLocaleDateString()}</p>
			<p>Region: {post.region}</p>
			<p>Pet Name: {post.petName}</p>
			<p>Description: {post.description}</p>
			<p>Gender: {post.gender}</p>
			<p>Pet Age: {post.petAge}</p>
			{/* falta vacunas */}
			
			<h3>Images</h3>
			<ul>
				{post.pictures.map((picture, index) => (
					<li key={index}>
						<img src={picture} alt={`Imagen ${index}`} />
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
