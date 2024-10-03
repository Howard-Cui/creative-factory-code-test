import CurrencyExchangeContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyExchangeContainer';
import CurrencyInputContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyInputContainer';
import { useState } from 'react';

const preDefinedCurrency = [
	{
		exchangeRate: 0.9163,
		exchangeToCode: 'CAD',
		exchangeToCountryCode: 'CA',
		exchangeToPrefix: '$ ',
	},
	{
		exchangeRate: 0.6167,
		exchangeToCode: 'EUR',
		exchangeToCountryCode: 'EU',
		exchangeToPrefix: '€ ',
	},
	{
		exchangeRate: 0.5439,
		exchangeToCode: 'GBP',
		exchangeToCountryCode: 'GB',
		exchangeToPrefix: '£ ',
	},
	{
		exchangeRate: 1.0712,
		exchangeToCode: 'NZD',
		exchangeToCountryCode: 'NZ',
		exchangeToPrefix: '$ ',
	},
	{
		exchangeRate: 0.6675,
		exchangeToCode: 'USD',
		exchangeToCountryCode: 'US',
		exchangeToPrefix: '$ ',
	},
];

export default function Home() {
	const [baseValue, setBaseValue] = useState<number>(0);

	const onCurrencyInputSubmit = (value: number) => {
		//...
		setBaseValue(value);
	};

	return (
		<>
			<main className="w-full py-6 gap-12 flex flex-col gap-12 justify-center">
				<CurrencyInputContainer onSubmitCallback={onCurrencyInputSubmit} />
				<section className="w-full flex flex-col gap-3 items-center">
					{preDefinedCurrency.map((curr) => (
						<CurrencyExchangeContainer
							key={curr.exchangeToCode}
							exchangeRate={curr.exchangeRate}
							exchangeFromValue={baseValue}
							exchangeFromCode="AUD"
							exchangeToCountryCode={curr.exchangeToCountryCode}
							exchangeToCode={curr.exchangeToCode}
							exchangeToPrefix={curr.exchangeToPrefix}
						/>
					))}
				</section>
			</main>
		</>
	);
}
