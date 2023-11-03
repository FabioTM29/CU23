import { type AxiosError } from 'axios'; // representa errores comunes de solicitudes HTTP
import { type ErrorResponse } from '../services/http.services';

export const useApiHandler = () => {
	const handleGet = async <R>(
		call: () => Promise<R>,
		// Puedes agregar más parámetros si es necesario, como una URL de consulta, por ejemplo.
	) => {
		let isError = false;
		let isSuccess = !isError;
		let message = 'Proceso ejecutado exitosamente';
		let result;
		try {
			result = await call();
		} catch (e) {
			const axiosError = e as AxiosError;
			result = axiosError.response;

			const errorPayload = result?.data as ErrorResponse;
			if (errorPayload != null) {
				isError = true;
				isSuccess = !isError;
				message = errorPayload.message;
			} else {
				throw e;
			}
		}
		return { result, isSuccess, isError, message };
	};

	const handlePost = async <I, R>(
		call: (payload: I) => Promise<R>,
		payload: I,
	) => {
		let isError = false;
		let isSuccess = !isError;
		let message = 'Proceso ejecutado exitosamente';
		let result;
		try {
			result = await call(payload);
		} catch (e) {
			const axiosError = e as AxiosError;
			result = axiosError.response;

			const errorPayload = result?.data as ErrorResponse;
			if (errorPayload != null) {
				isError = true;
				isSuccess = !isError;
				message = errorPayload.message;
			} else {
				throw e;
			}
		}
		return { result, isSuccess, isError, message };
	};

	return { handleGet, handlePost };
};

/*

const apiHandler = useApiHandler();
const postResponse = await apiHandler.handlePost<RequestType, ResponseType>(
  (payload) => apiPostFunction(payload),
  postData
);

const getResponse = await apiHandler.handleGet<ResponseType>(() => apiGetFunction());



*/
