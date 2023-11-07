import { type PostListResponse } from "../Pages/ShowPost/types";
import { doGet } from "./http.services";


 
 export const getPosts = async () => {
    const response = await doGet<PostListResponse>('/showPost');
    return response;
 
 }

 export const getValidatePosts = async () => {
   const response = await doGet<PostListResponse>('/validatePost');
   return response;

}




