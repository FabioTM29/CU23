export interface Post {
  id: string;
  content: string;
  postTimestamp: Date;
  postStatus: PostStatus;
  region: string;
  userId: string;
  pictures: Picture[];
}

export interface Picture{
  id: string;
  picture: string;
}
  
/*
  export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
  }

  */
  
  export enum PostStatus {
    ACCEPTED = 'ACCEPTED',
    REVIEWING = 'REVIEWING',
    REJECTED = 'REJECTED',
  }

 export type PostListResponse = Post[];
  