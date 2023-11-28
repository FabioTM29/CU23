import { useSessionHandler } from '@/hooks/useSessionHandler';

export const useDependencies = () => {
	const { sessionContext } = useSessionHandler();

	return {
		sessionContext,
	};
};
