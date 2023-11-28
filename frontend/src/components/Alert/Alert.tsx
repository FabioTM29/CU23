import { Button } from 'antd';
import { useErrorBoundary } from 'react-error-boundary';

const AlertMessage = (props: { error: string }) => {
	const { error } = props;
	const { resetBoundary } = useErrorBoundary();
	return (
		<>
			<div>Algo salió mal: ${error}</div>
			<Button onClick={resetBoundary}> Retroceder</Button>
		</>
	);
};

export default AlertMessage;
