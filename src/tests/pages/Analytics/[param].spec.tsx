import Analytics from '@/pages/Analytics/[param]';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { NextRouter, useRouter } from 'next/router';
import '@testing-library/jest-dom';
import { mocked } from 'jest-mock';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('Test Analytics Page', () => {
	it('when click back button, the router back function should be called', async () => {
		const mockBack = jest.fn();
		const mockedUseRouter = mocked(useRouter);
		mockedUseRouter.mockReturnValue({
			back: mockBack,
			query: {
				param: 'AUD-USD',
			},
		} as unknown as NextRouter);

		render(<Analytics />);

		const goBackBtn = screen.getByRole('button', {
			name: /Go Back/i,
		});
		fireEvent.click(goBackBtn);
		await waitFor(() => {
			expect(mockBack).toHaveBeenCalledTimes(1);
		});
	});
});
