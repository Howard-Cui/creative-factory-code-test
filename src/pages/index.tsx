import { exchangeAPIs } from '@/APIs/exchangeAPI';
import CurrencyExchangeContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyExchangeContainer';
import CurrencyInputContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyInputContainer';
import { useState } from 'react';

export const preDefinedCurrency = [
	{
		exchangeToCode: 'CAD',
		exchangeToCountryCode: 'CA',
		exchangeToPrefix: '$ ',
	},
	{
		exchangeToCode: 'EUR',
		exchangeToCountryCode: 'EU',
		exchangeToPrefix: '€ ',
	},
	{
		exchangeToCode: 'GBP',
		exchangeToCountryCode: 'GB',
		exchangeToPrefix: '£ ',
	},
	{
		exchangeToCode: 'NZD',
		exchangeToCountryCode: 'NZ',
		exchangeToPrefix: '$ ',
	},
	{
		exchangeToCode: 'USD',
		exchangeToCountryCode: 'US',
		exchangeToPrefix: '$ ',
	},
];

export type ExchangeRate = {
	[key: string]: number;
};

interface HomePageProps {
	rates: ExchangeRate;
}

export default function Home({ rates }: HomePageProps) {
	const [baseValue, setBaseValue] = useState<number>(0);

	const onCurrencyInputSubmit = (value: number) => {
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
							exchangeRate={rates[curr.exchangeToCode] as number}
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

export async function getStaticProps() {
	const rates = await exchangeAPIs.getRateBasedOnCode('AUD');

	return {
		props: {
			rates,
		},
		revalidate: 3600,
	};
}
