import React from 'react';

interface StrongCurrencyInterface {
	currencyCode: string;
}

const StrongCurrency = ({ currencyCode }: StrongCurrencyInterface) => {
	return <strong className="font-medium">{currencyCode}</strong>;
};

export default StrongCurrency;
