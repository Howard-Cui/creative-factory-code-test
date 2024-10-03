/**
 *
 * @param num the number type input, normally followed xxxx.xxxx format
 * @returns the exchange rate that in x.xxxx format
 */
export const transferExchangeValue = (num: number) => {
	const numArr = `${num}`.split('.');

	if (numArr.length === 2) {
		let decimalPart = numArr[1];
		if (decimalPart.length < 4) {
			decimalPart = (decimalPart + '0000').substring(0, 4);
		} else if (decimalPart.length > 4) {
			decimalPart = decimalPart.substring(0, 4);
		}
		numArr[1] = decimalPart;
		return numArr.join('.');
	}
	return num + '.0000';
};
