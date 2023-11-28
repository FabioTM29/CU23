import { registerUser } from '@/services/user.service';
import { RegisterForm } from './types';
import { RegisterUserInput } from '@/models';
import { validationSchema } from '@/utils/forms.util';
import { useNavigate } from 'react-router-dom';
import useNotificationHandler from '@/hooks/useNotificationHandler';
import { useApiHandler } from '@/hooks/useApiHandler';

const useDependencies = () => {
	const navigate = useNavigate();
	const { setErrorNotificaiton } = useNotificationHandler();
	const { handleMutation } = useApiHandler();

	const initialValues = {
		name: '',
		email: '',
		password: '',
		passwordConfirmation: '',
	};

	const rules = {
		name: [validationSchema.requiredFieldRule],
		email: [
			validationSchema.requiredFieldRule,
			{ type: 'email', message: 'Invalid email format' },
		],
		password: [
			validationSchema.requiredFieldRule,
			{
				validator: async (_: any, value: string) => {
					const regex = /^(?=.*[0-9])(?=.*[A-Z])/;

					if (regex.test(value)) {
						await Promise.resolve();
					} else {
						return await Promise.reject(
							new Error('Missing numbers and uppercase letters.'),
						);
					}
				},
			},
		],
		passwordConfirmation: [validationSchema.requiredFieldRule],
	};

	const handleSubmit = async (values: RegisterForm) => {
		const user: RegisterUserInput = {
			name: values.name,
			email: values.email,
			password: values.password,
		};
		const { isError, message } = await handleMutation(registerUser, user);
		if (!isError) {
			navigate('/');
		} else {
			setErrorNotificaiton(message);
		}
	};
	const handleCancel = () => {
		navigate('/');
	};
	return {
		initialValues,
		rules,
		handleSubmit,
		handleCancel,
	};
};

export default useDependencies;
