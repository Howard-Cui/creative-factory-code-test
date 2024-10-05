import { preciseCalculateExchangeResult } from '@/utils/preciseCalculateExchangeResult';

describe('test preciseCalculation', () => {
	it('the function will return 0.02 when 0.1 times 0.3', () => {
		expect(preciseCalculateExchangeResult(0.1, 0.2)).toBe(0.02);
	});
});
