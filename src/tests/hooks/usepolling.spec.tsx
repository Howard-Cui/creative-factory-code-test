import { usePolling } from '@/hooks/usePolling';
import { renderHook } from '@testing-library/react-hooks';

describe('usePolling', () => {
	it('should initialized data as undefined, error as undefined and isInitialLoading as true', () => {
		const { result } = renderHook(() => usePolling(async () => ({}), 1000));
		expect(result.current.data).toBeUndefined();
		expect(result.current.error).toBeUndefined();
		expect(result.current.isInitialLoading).toBeTruthy();
	});

	it('if fetch method throw error, the error from result will be the error that thrown', async () => {
		const { result, waitForNextUpdate } = renderHook(() =>
			usePolling(async () => {
				throw new Error('Example Error');
			}, 1000)
		);

		await waitForNextUpdate();
		expect(result.current.error?.message).toBe('Example Error');
	});

	it('the data will change if the second fetch will result differently', async () => {
		let resultTime = 0;
		const { result, waitForNextUpdate } = renderHook(() =>
			usePolling(async () => {
				if (resultTime === 1) {
					return [1, 2];
				}
				resultTime++;
				return [1];
			}, 1000)
		);

		await waitForNextUpdate();

		expect(result.current.data.length).toBe(1);
		expect(result.current.data.at(0)).toBe(1);

		await waitForNextUpdate();

		expect(result.current.data.length).toBe(2);
		expect(result.current.data.at(0)).toBe(1);
		expect(result.current.data.at(1)).toBe(2);
	});
});
