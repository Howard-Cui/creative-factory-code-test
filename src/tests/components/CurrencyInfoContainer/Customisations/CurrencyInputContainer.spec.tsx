import CurrencyInputContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyInputContainer';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

describe('Test for the CurrencyInputContainer Customization', () => {
	it('Submit function is called when form submission triggered with correct value', async () => {
		const mockOnSubmit = jest.fn();
		render(<CurrencyInputContainer onSubmitCallback={mockOnSubmit} />);
		const currencyInput = screen.getByTestId('currencyInput');
		const submitButton = screen.getByRole('button');

		fireEvent.change(currencyInput, { target: { value: '123.35' } });

		await waitFor(() => {
			fireEvent.click(submitButton);
			expect(mockOnSubmit).toHaveBeenCalledWith(123.35);
			expect(mockOnSubmit).toHaveBeenCalledTimes(1);
			mockOnSubmit.mockClear();
		});
	});
});
