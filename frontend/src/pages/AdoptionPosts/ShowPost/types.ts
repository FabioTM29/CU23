export interface AdoptionPost {
  postId: string;
  userId: string;
  content: string;
  postTimestamp: Date;
  postStatus: string;
  region: string;
  pictures: string[];
  petId: string;
  petName: string;
  description: string;
  petStatus: string;
  gender: string;
  petAge: string;
}
  


 export type PostListResponse = AdoptionPost[];
  