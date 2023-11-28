import useNotificationHandler from '@/hooks/useNotificationHandler';
import { Menu } from 'antd';
import { useNavigate } from 'react-router-dom';
const items = [{ key: 0, label: 'Home', url: '/' }];

const NavBar = () => {
	const navigate = useNavigate();
	const { clearNotification } = useNotificationHandler();
	const handleClick = (e: { key: string }) => {
		const { key } = e;
		clearNotification();
		navigate(items[+key].url);
	};
	return (
		<>
			<Menu
				theme='dark'
				mode='horizontal'
				onClick={handleClick}
				defaultSelectedKeys={['1']}
				items={items}
			/>
		</>
	);
};

export default NavBar;
