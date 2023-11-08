import { type PostStatus, type PostListResponse } from '../Pages/ShowPost/types';
import { doGet, doPut } from './http.services';

export const getPosts = async () => {
	const response = await doGet<PostListResponse>('/api/showPostAccepted');
	return response;
};

export const getValidatePosts = async () => {
	const response = await doGet<PostListResponse>('/api/showPostInReview');
	return response;
};

export const updateStatusPost = async (payload : PostStatus, id: string) => {
	const response = await doPut<string, string>(payload, `/api/updatePostStatus/${id}`);
	return response;
};
