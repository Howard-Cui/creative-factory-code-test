import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface CurrencyInfoContainerProps {
	rightSlot?: React.ReactNode;
	children?: React.ReactNode;
	countryCode: string;
	currencyCodeDisplay: React.ReactNode;
}

const CurrencyInfoContainer = ({
	rightSlot,
	children,
	countryCode,
	currencyCodeDisplay,
}: CurrencyInfoContainerProps) => {
	return (
		<div
			className="w-4/5 h-12 rounded-md border-normal_grey hover:border-focus box-content border
		 border-2 flex justify-between box-content"
		>
			<div className="flex flex-between items-center px-2">
				<div className="flex gap-3 items-center h-full">
					<ReactCountryFlag countryCode={countryCode} />
					<h3>{currencyCodeDisplay}</h3>
				</div>
				{children}
			</div>
			<div className="w-1/12 max-w-20 border-l border-normal_grey box-content flex justify-center items-center">
				{rightSlot}
			</div>
		</div>
	);
};

export default CurrencyInfoContainer;
