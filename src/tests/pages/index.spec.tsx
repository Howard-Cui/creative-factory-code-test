/* eslint-disable @typescript-eslint/no-unused-vars */
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Home, {
	ExchangeRate,
	getStaticProps,
	preDefinedCurrency,
} from '@/pages';
import '@testing-library/jest-dom';

jest.mock('../../APIs/exchangeAPI.ts', () => ({
	exchangeAPIs: {
		getRateBasedOnCode: async (_code: string) => ({ USD: 1 }),
	},
}));

describe('testing for the home page', () => {
	it('Page render properly with pass in the currency rate object', () => {
		render(
			<Home
				rates={{
					AUD: 1,
					USD: 2,
				}}
			/>
		);
		screen.getByTestId('currencyInput');
		const currencyDisplays = screen.getAllByTestId('currencyDisplay');
		expect(currencyDisplays).toHaveLength(5);
	});

	it('On the page, if change the input value of AUD and click calculator button, the value of other currency will change to the correct rate according to the exchange rate', async () => {
		const exchangeRate = {};
		preDefinedCurrency.forEach((item) => {
			(exchangeRate as ExchangeRate)[item.exchangeToCode] = 1;
		});
		render(<Home rates={exchangeRate as unknown as ExchangeRate} />);
		const audInput = screen.getByTestId('currencyInput');
		const currencyDisplays = screen.getAllByTestId('currencyDisplay');
		const submitBtn = screen.getByRole('button');
		expect(audInput).toHaveValue('$ 0.00');
		currencyDisplays.forEach((display, index) => {
			expect(display).toHaveValue(
				`${preDefinedCurrency[index].exchangeToPrefix}0.00`
			);
		});

		fireEvent.focus(audInput);
		fireEvent.change(audInput, { target: { value: '$ 1.00' } });
		await waitFor(() => {
			expect(audInput).toHaveValue('$ 1.00');
		});
		fireEvent.click(submitBtn);
		await waitFor(() => {
			currencyDisplays.forEach((display, index) => {
				expect(display).toHaveValue(
					`${preDefinedCurrency[index].exchangeToPrefix}1.00`
				);
			});
		});
	});

	it('On the page, if change the input value of AUD and not focused, the value of other currency will change to the correct rate according to the exchange rate', async () => {
		const exchangeRate = {};
		preDefinedCurrency.forEach((item) => {
			(exchangeRate as ExchangeRate)[item.exchangeToCode] = 1;
		});
		render(<Home rates={exchangeRate as unknown as ExchangeRate} />);
		const audInput = screen.getByTestId('currencyInput');
		const currencyDisplays = screen.getAllByTestId('currencyDisplay');
		expect(audInput).toHaveValue('$ 0.00');
		currencyDisplays.forEach((display, index) => {
			expect(display).toHaveValue(
				`${preDefinedCurrency[index].exchangeToPrefix}0.00`
			);
		});

		fireEvent.focus(audInput);
		fireEvent.change(audInput, { target: { value: '$ 1.00' } });
		await waitFor(() => {
			expect(audInput).toHaveValue('$ 1.00');
		});
		fireEvent.focusOut(audInput);
		await waitFor(() => {
			currencyDisplays.forEach((display, index) => {
				expect(display).toHaveValue(
					`${preDefinedCurrency[index].exchangeToPrefix}1.00`
				);
			});
		});
	});

	it('On the page, if change the input value of AUD , the value of other currency will not change if not focus out or click submit button', async () => {
		const exchangeRate = {};
		preDefinedCurrency.forEach((item) => {
			(exchangeRate as ExchangeRate)[item.exchangeToCode] = 1;
		});
		render(<Home rates={exchangeRate as unknown as ExchangeRate} />);
		const audInput = screen.getByTestId('currencyInput');
		const currencyDisplays = screen.getAllByTestId('currencyDisplay');
		expect(audInput).toHaveValue('$ 0.00');
		currencyDisplays.forEach((display, index) => {
			expect(display).toHaveValue(
				`${preDefinedCurrency[index].exchangeToPrefix}0.00`
			);
		});

		fireEvent.focus(audInput);
		fireEvent.change(audInput, { target: { value: '$ 1.00' } });
		await waitFor(() => {
			expect(audInput).toHaveValue('$ 1.00');
		});
		await waitFor(() => {
			currencyDisplays.forEach((display, index) => {
				expect(display).toHaveValue(
					`${preDefinedCurrency[index].exchangeToPrefix}0.00`
				);
			});
		});
	});

	it('test get static props function return the value that API returned', async () => {
		const res = await getStaticProps();
		expect(res.revalidate).toBe(3600);
		expect(res.props.rates['USD']).toBe(1);
		jest.clearAllMocks();
	});
});
