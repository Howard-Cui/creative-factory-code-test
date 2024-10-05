import Analytics, {
	getStaticPaths,
	getStaticProps,
} from '@/pages/Analytics/[param]';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NextRouter, useRouter } from 'next/router';
import '@testing-library/jest-dom';
import { mocked } from 'jest-mock';
import { exchangeAPIs } from '@/APIs/exchangeAPI';
import { ANALYTICS_PATHS } from '@/constants/AnalyticsPaths';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

jest.mock('../../../APIs/exchangeAPI.ts', () => ({
	exchangeAPIs: {
		getHistoricalRateBasedOnCode: jest.fn(),
	},
}));

describe('Test Analytics Page', () => {
	it('test get static path props method', async () => {
		(
			exchangeAPIs.getHistoricalRateBasedOnCode as unknown as jest.Mock
		).mockReturnValue({
			'': 1,
		});
		await getStaticProps({
			params: {
				param: '-',
			},
		});
		expect(exchangeAPIs.getHistoricalRateBasedOnCode).toHaveBeenCalledTimes(14);
		jest.clearAllMocks();
	});

	it('test get static path method', async () => {
		const res = await getStaticPaths();
		expect(JSON.stringify(res)).toBe(JSON.stringify(ANALYTICS_PATHS));
	});

	it('when click back button, the router back function should be called', async () => {
		const mockBack = jest.fn();
		const mockedUseRouter = mocked(useRouter);
		mockedUseRouter.mockReturnValue({
			back: mockBack,
			query: {
				param: 'AUD-USD',
			},
		} as unknown as NextRouter);

		render(<Analytics data={[]} />);

		const goBackBtn = screen.getByRole('button', {
			name: /Go Back/i,
		});
		fireEvent.click(goBackBtn);
		await waitFor(() => {
			expect(mockBack).toHaveBeenCalledTimes(1);
		});
		jest.clearAllMocks();
	});
});
