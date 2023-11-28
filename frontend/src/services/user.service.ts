import {
	AuthenticationInput,
	AuthenticationResponse,
	RegisterUser,
	RegisterUserInput,
	UserResponse,
} from '@/models';
import { doGet, doPost, doPut } from './http.service';
import { PostListResponse } from '@/pages/AdoptionPosts/ShowPost/types';
export const registerUser = async (
	user: RegisterUserInput,
): Promise<RegisterUser> => {
	const response = await doPost<RegisterUserInput, RegisterUser>(
		user,
		'/register',
	);

	return response;
};
export const login = async (
	user: AuthenticationInput,
): Promise<AuthenticationResponse> => {
	const result = await doPost<AuthenticationInput, AuthenticationResponse>(
		user,
		'/login',
	);
	return result;
};

export const getUser = async (email: string): Promise<UserResponse> => {
	const response = await doGet<UserResponse>(`/api/user/${email}`);
	return response;
};

export const getPosts = async () => {
	const response = await doGet<PostListResponse>('/api/showPostAccepted');
	return response;
};

export const getReviewingPosts = async () => {
	const response = await doGet<PostListResponse>('/api/showPostInReview');
	return response;
};

export const updateStatusPost = async (payload : string, id: string) => {
	const response = await doPut<string, string>(payload, `/api/updatePostStatus/${id}`);
	return response;
};
