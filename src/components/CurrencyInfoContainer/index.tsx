import React from 'react';
import ReactCountryFlag from 'react-country-flag';

interface CurrencyInfoContainerProps {
	rightSlot?: React.ReactNode;
	children?: React.ReactNode;
	countryCode: string;
	currencyCodeDisplay: React.ReactNode;
	className?: string;
}

const CurrencyInfoContainer = ({
	rightSlot,
	children,
	countryCode,
	currencyCodeDisplay,
	className,
}: CurrencyInfoContainerProps) => {
	return (
		<div
			className={`w-4/5 h-14 rounded-md border-normal_grey hover:border-focus box-content border
		 border-2 flex justify-between box-content ${className}`}
		>
			<div className="w-11/12 flex justify-between items-center px-2">
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
