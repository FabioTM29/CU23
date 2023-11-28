import Container from '@/components/Container';
import { Button, Card, Divider, Form, Input, Space } from 'antd';
import useDependencies from './hooks';

const Register = () => {
	const { initialValues, rules, handleSubmit, handleCancel } =
		useDependencies();

	return (
		<Container>
			<Card title='Regístrese'>
				<Form initialValues={initialValues} onFinish={handleSubmit}>
					<Space direction='vertical' style={{ width: '100%' }}>
						<Form.Item name='name' rules={rules.name}>
							<Input placeholder='Nombre' />
						</Form.Item>
						<Form.Item name='email' rules={rules.email}>
							<Input placeholder='Correo electrónico' type='email' />
						</Form.Item>
						<Form.Item name='password' rules={rules.password}>
							<Input placeholder='COntraseña' type='password' />
						</Form.Item>
						<Form.Item
							name='passwordConfirmation'
							rules={rules.passwordConfirmation}
						>
							<Input placeholder='Confirmación de Contraseña' type='password' />
						</Form.Item>
					</Space>
					<Divider />
					<Space wrap style={{ width: '100%', justifyContent: 'center' }}>
						<Button type='primary' shape='round' size='large' htmlType='submit'>
							Registrar
						</Button>
						<Button shape='round' size='large' onClick={handleCancel}>
							Cancelar
						</Button>
					</Space>
				</Form>
			</Card>
		</Container>
	);
};

export default Register;
