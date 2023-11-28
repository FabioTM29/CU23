import { Outlet } from 'react-router-dom';
import Layout, { Content, Header } from 'antd/es/layout/layout';
import useNotificationHandler from '@/hooks/useNotificationHandler';
import { Alert, Space } from 'antd';
import { useSessionHandler } from '@/hooks/useSessionHandler';
import NavBar from '@/components/NavBar/NavBar';

const Main = () => {
	const { clearNotification, notification } = useNotificationHandler();
	const { sessionContext } = useSessionHandler();

	const onCloseMessage = () => {
		clearNotification();
	};

	return (
		<Layout style={{ minHeight: '100vh', top: '50%' }}>
			{sessionContext != null ? (
				<Header>
					<NavBar />
				</Header>
			) : null}
			<Content>
				<Space direction='vertical' style={{ width: '100%' }}>
					{notification?.message != null ? (
						<Alert
							closable
							description={notification?.message}
							type={notification?.type}
							showIcon
							onClose={onCloseMessage}
						/>
					) : null}
				</Space>
				<Outlet />
			</Content>
		</Layout>
	);
};

export default Main;
