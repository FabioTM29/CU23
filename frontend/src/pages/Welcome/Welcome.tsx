import { useNavigate } from 'react-router-dom';
import Container from '@/components/Container';
import { Button, Card, Divider, Space } from 'antd';

const Welcome = () => {
	const navigate = useNavigate();

	const goToRegister = () => {
		navigate('/Register');
	};
	const goToLogin = () => {
		navigate('/Login');
	};

	return (
		<>
			<Container>
				<Card title='Bienvenido a Adopet'>
					<p>La red social para adoptar mascotas</p>
					<Divider />
					<Space wrap style={{ width: '100%', justifyContent: 'center' }}>
						<Button
							type='primary'
							shape='round'
							size='large'
							onClick={goToRegister}
						>
							Registrese
						</Button>
						<Button
							type='primary'
							shape='round'
							size='large'
							onClick={goToLogin}
						>
							Ingrese
						</Button>
					</Space>
				</Card>
			</Container>
		</>
	);
};

export default Welcome;
