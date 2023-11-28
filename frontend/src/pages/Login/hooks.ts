import { AuthenticationInput, AuthenticationResponse } from '@/models';
import { login } from '@/services/user.service';
import { validationSchema } from '@/utils/forms.util';
import { LoginForm } from './types';
// import { ErrorResponse } from '@/models/api.models';
// import useNotificationHandler from '@/hooks/useNotificationHandler';
import { useNavigate } from 'react-router-dom';
import { useSessionHandler } from '@/hooks/useSessionHandler';
import { useApiHandler } from '@/hooks/useApiHandler';
import useNotificationHandler from '@/hooks/useNotificationHandler';

const useDependencies = () => {
	const { setSessionStore, clearSession } = useSessionHandler();
	const { handleMutation } = useApiHandler();
	const { setErrorNotificaiton } = useNotificationHandler();
	const navigate = useNavigate();

	const initialValues = {
		username: '',
		password: '',
	};
	const rules = {
		username: [validationSchema.requiredFieldRule],
		password: [validationSchema.requiredFieldRule],
	};

	const handleLogin = async (values: LoginForm) => {
		const user: AuthenticationInput = {
			username: values.username,
			password: values.password,
		};
		clearSession();

		const { result, isError, message } = await handleMutation(login, user);
		if (isError) {
			setErrorNotificaiton(message);
		} else {
			const response = result as AuthenticationResponse;
			setSessionStore({ ...response });
			navigate('/');
		}
	};
	const handleCancel = () => {
		navigate('/');
	};

	return { initialValues, rules, handleLogin, handleCancel };
};

export default useDependencies;
