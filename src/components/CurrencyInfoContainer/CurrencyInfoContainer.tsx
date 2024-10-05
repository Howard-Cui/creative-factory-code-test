import React from 'react';

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
			className={`w-full h-14 rounded-md border-normal_grey hover:border-focus box-content border
		 border-2 flex justify-between box-content ${className}`}
		>
			<div className="w-11/12 flex justify-between items-center px-2">
				<div className="flex gap-3 items-center h-full">
					<div
						// use inline style here for insert image in more flexible way, because tailwind not support string concat for classes
						style={{
							backgroundImage: `url(http://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg)`,
						}}
						className="flex justify-end w-4 h-4 rounded-full bg-no-repeat bg-center bg-cover"
					></div>
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
