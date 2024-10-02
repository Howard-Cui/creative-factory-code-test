import React from 'react';
import CurrencyFormat, { Props } from 'react-currency-format';

const BoldCurrencyFormat = (props: Props) => {
	return (
		<CurrencyFormat
			name="currency"
			className="appearance-none border-none outline-none
        text-right w-auto bg-transparent focus:border-none
        font-bold"
			fixedDecimalScale
			thousandSeparator
			decimalScale={2}
			thousandSpacing={'3'}
			{...props}
		/>
	);
};

export default BoldCurrencyFormat;
