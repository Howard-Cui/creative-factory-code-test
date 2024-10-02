import React from 'react';
import CurrencyInfoContainer from '..';
import StrongCurrency from '@/components/Typography/StrongCurrency';
import { LiaCalculatorSolid } from 'react-icons/lia';
import { useState } from 'react';

interface CurrencyInputContainerProps {
	onSubmitCallback: (value: number) => void;
}

const CurrencyInputContainer = ({
	onSubmitCallback,
}: CurrencyInputContainerProps) => {
	const [currencyValue, setCurrencyValue] = useState<number>(0);

	const handleOnSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmitCallback(currencyValue);
		setCurrencyValue(0);
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			className="w-full flex flex-col items-center"
		>
			<CurrencyInfoContainer
				countryCode="AU"
				currencyCodeDisplay={<StrongCurrency currencyCode="AUD" />}
				rightSlot={
					<button type="submit">
						<LiaCalculatorSolid
							className="text-highlight_grey active:text-focus"
							size={20}
						/>
					</button>
				}
			>
				<label htmlFor="currency"></label>
				<input
					data-testid="currencyInput"
					type="number"
					name="currency"
					className="appearance-none border-none outline-none
            text-right w-auto bg-transparent focus:border-none"
					value={currencyValue}
					onChange={(e) => setCurrencyValue(parseFloat(e.target.value))}
				/>
			</CurrencyInfoContainer>
		</form>
	);
};

export default CurrencyInputContainer;
