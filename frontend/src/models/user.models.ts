export type RegisterUserInput = {
	name: string;
	email: string;
	password: string;
};
export type RegisterUser = {
	name: string;
	email: string;
};
export type AuthenticationInput = {
	username: string;
	password: string;
};
export type AuthenticationResponse = {
	token: string;
	name: string;
	email: string;
};

export type UserResponse = {
	name: string;
	email: string;
	nickname: string | null;
};
