import React, { useState } from 'react';
import CurrencyInfoContainer from '..';
import StrongCurrency from '@/components/Typography/StrongCurrency';
import { LiaCalculatorSolid } from 'react-icons/lia';
import { Values } from 'react-currency-format';
import BoldCurrencyFormat from '@/components/CurrencyFormat/BoldCurrencyFormat';

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
	};

	const handleOnChange = (values: Values) => {
		const value = values.value;
		setCurrencyValue(parseFloat(value));
	};

	return (
		<form
			onSubmit={handleOnSubmit}
			className="w-4/5 max-w-[500px] flex flex-col items-center"
			onBlur={handleOnSubmit}
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
				<BoldCurrencyFormat
					data-testid="currencyInput"
					name="currency"
					prefix={'$ '}
					value={currencyValue}
					onValueChange={handleOnChange}
				/>
			</CurrencyInfoContainer>
		</form>
	);
};

export default CurrencyInputContainer;
