import Big from 'big.js';

export const preciseCalculateExchangeResult = (
	baseValue: number,
	exchangeRate: number
) => {
	const base = new Big(baseValue);
	const rate = new Big(exchangeRate ?? 0);

	return parseFloat(base.times(rate).toString());
};
