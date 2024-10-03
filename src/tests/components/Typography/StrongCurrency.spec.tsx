import StrongCurrency from '@/components/Typography/StrongCurrency';
import { render, screen } from '@testing-library/react';

describe('Test for StrongCurrency', () => {
	it('strong currency display correctly', () => {
		render(<StrongCurrency currencyCode={'AUD'} />);
		screen.getByText('AUD');
	});
});
