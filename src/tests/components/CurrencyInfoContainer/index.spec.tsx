import CurrencyInfoContainer from '@/components/CurrencyInfoContainer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Tests for CurrencyInfoContainer', () => {
	it('CurrencyInfoContainer will display normally when put rightSlot, children, countryCode, currencyCodeDisplay', () => {
		const children = 'Children';
		const rightSlot = 'RightSlot';
		const countryCode = 'AU';
		const currencyCodeDisplay = 'AUD';
		render(
			<CurrencyInfoContainer
				rightSlot={rightSlot}
				countryCode={countryCode}
				currencyCodeDisplay={currencyCodeDisplay}
			>
				{children}
			</CurrencyInfoContainer>
		);

		const textCases = [
			screen.getByText(/children/i),
			screen.getByText(/rightslot/i),
			screen.getByText(/au/i),
			screen.getByText(/aud/i),
		];
		textCases.forEach((c: HTMLElement) => {
			expect(c).toBeInTheDocument();
		});
	});
});
