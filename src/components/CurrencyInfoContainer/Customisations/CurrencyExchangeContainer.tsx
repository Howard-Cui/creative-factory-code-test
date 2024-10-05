import StrongCurrency from '@/components/Typography/StrongCurrency';
import { transferExchangeValue } from '@/utils/transferExchangeValue';
import Link from 'next/link';
import React from 'react';
import CurrencyInfoContainer from '../CurrencyInfoContainer';
import BoldCurrencyFormat from '@/components/CurrencyFormat/BoldCurrencyFormat';
import { preciseCalculateExchangeResult } from '@/utils/preciseCalculateExchangeResult';

export interface CurrencyExchangeContainerProps {
	exchangeRate: number;
	exchangeFromValue: number;
	exchangeFromCode: string;
	exchangeToCountryCode: string;
	exchangeToPrefix: string;
	exchangeToCode: string;
}

const CurrencyExchangeContainer = ({
	exchangeRate,
	exchangeFromValue,
	exchangeFromCode,
	exchangeToCountryCode,
	exchangeToPrefix,
	exchangeToCode,
}: CurrencyExchangeContainerProps) => {
	const displayTargetExchangeRate = transferExchangeValue(exchangeRate);

	return (
		<div className="w-full flex justify-center items-center">
			<Link
				className="w-4/5 max-w-[500px] flex justify-center"
				href={`Analytics/${exchangeFromCode}-${exchangeToCode}`}
			>
				<CurrencyInfoContainer
					countryCode={exchangeToCountryCode}
					currencyCodeDisplay={<StrongCurrency currencyCode={exchangeToCode} />}
					className="shadow-lg"
				>
					<div className="flex flex-col gap-0.5 items-end">
						<BoldCurrencyFormat
							data-testid="currencyDisplay"
							prefix={exchangeToPrefix}
							value={preciseCalculateExchangeResult(
								exchangeFromValue,
								exchangeRate
							)}
						/>
						<p className="text-normal_grey text-sm">
							{`1 ${exchangeFromCode.toUpperCase()} = ${displayTargetExchangeRate} ${exchangeToCode.toUpperCase()}`}
						</p>
					</div>
				</CurrencyInfoContainer>
			</Link>
		</div>
	);
};

export default CurrencyExchangeContainer;
