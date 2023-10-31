import {type OkResponse, doPost } from "./http.services";

 export const registerUser = async (payload:RegisterRequest) => {
    const result = await doPost<RegisterRequest, OkResponse>(payload, "/register");
    return result;
 };

 export const login = async(payload: LoginRequest) => {
   const result = await doPost<LoginRequest,LoginResponse>(payload, '/login');
   return result;
};
 
 type RegisterRequest = {
    name:string;
    email:string;
    password:string;
 }

type LoginRequest = {
   username:string;
   password:string;
}

 type LoginResponse = {
   token:string;
 }

 