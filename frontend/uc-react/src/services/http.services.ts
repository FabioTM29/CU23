import axios, {type AxiosResponse, type AxiosInstance } from "axios";

const apitInstance: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
});
export const doPost = async <I,R>(payload: I,path:string) => {
    const response:AxiosResponse<R,I> = await apitInstance.post(path,payload);
    return response.data;
};

export type OkResponse = {
    status:string;
};

export type ErrorResponse = {
    message:string;
    code:number;
};