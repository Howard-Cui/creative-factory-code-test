import BoldCurrencyFormat from '@/components/CurrencyFormat/BoldCurrencyFormat';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('to test BoldCurrencyFormat component', () => {
	it('for the value that have more than 3 digits, digits should be seperate by 3 digits by comma', () => {
		render(<BoldCurrencyFormat value={10000} prefix="$ " />);

		const currencyInput = screen.getByTestId('currency-format');
		expect(currencyInput).toHaveValue('$ 10,000.00');
	});

	it('for float numbers, should only have two decimal places displayed', () => {
		render(<BoldCurrencyFormat value={0} prefix="$ " />);

		const currencyInput = screen.getByTestId('currency-format');
		expect(currencyInput).toHaveValue('$ 0.00');
	});
});
