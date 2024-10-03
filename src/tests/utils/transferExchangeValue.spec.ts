import { transferExchangeValue } from '@/utils/transferExchangeValue';

describe('Test transferExchangeValue utility function', () => {
	it('if input number is a integer, it should have four 0 decimal places kept', () => {
		expect(transferExchangeValue(0)).toBe('0.0000');
	});

	it('if input is a decimal number larger than 4 decimals, it will only kept four decimal places', () => {
		expect(transferExchangeValue(0.555555)).toBe('0.5555');
	});

	it('if input is a decimal number less than 4 decimal places, it will auto add 0 after until 4 decimal places', () => {
		expect(transferExchangeValue(0.2)).toBe('0.2000');
	});
});
