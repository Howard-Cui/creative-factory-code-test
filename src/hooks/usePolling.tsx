import { useEffect, useState } from 'react';

/**
 *
 * @param fetchFunction the fetching logic of the function and will return data
 * @param interval time interval of polling
 * @returns data isStatusLoading status and error of fetching result
 */
export const usePolling = (
	fetchFunction: () => Promise<object>,
	interval: number
) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [data, setData] = useState<any>();
	const [isInitialLoading, setIsInitialLoading] = useState<boolean>(true);
	const [error, setError] = useState<Error>();

	const pollingLogic = async () => {
		try {
			const res = await fetchFunction();
			setData(res);
		} catch (error) {
			setError(error as Error);
		} finally {
			setIsInitialLoading(false);
		}
	};

	useEffect(() => {
		const polling = setInterval(pollingLogic, interval);
		return () => {
			clearInterval(polling);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [interval]);

	return {
		data,
		isInitialLoading,
		error,
	};
};
