// types.ts
export interface Post {
    content: string;
    user: User;
    timestamp: string;
    status: PostStatus;
    pictures: string[];
  }
  
  export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }
  
  export enum PostStatus {
    ACCEPTED = 'ACCEPTED',
    REVIEWING = 'REVIEWING',
    REJECTED = 'REJECTED',
  }

 export type PostListResponse = Post[];
  