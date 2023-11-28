import { Space } from 'antd';
import type { ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
}
const Container = (props: ContainerProps) => {
	return (
		<>
			<Space
				direction='horizontal'
				style={{ width: '100%', justifyContent: 'center' }}
			>
				{props.children}
			</Space>
		</>
	);
};

export default Container;
