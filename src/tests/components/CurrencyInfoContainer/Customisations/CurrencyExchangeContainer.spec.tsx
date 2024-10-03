import CurrencyExchangeContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyExchangeContainer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Tests for CurrencyExchangeContainer', () => {
	it('The value will translate to the correct currency value format', () => {
		const rate = 0.5;
		const input = 1;
		render(
			<CurrencyExchangeContainer
				exchangeRate={rate}
				exchangeFromCode="EUR"
				exchangeToCountryCode="EU"
				exchangeToPrefix="$ "
				exchangeFromValue={input}
				exchangeToCode="AUD"
			/>
		);

		const currencyInput = screen.getByTestId('test-target');
		expect(currencyInput).toHaveValue('$ 0.50');
	});
});
