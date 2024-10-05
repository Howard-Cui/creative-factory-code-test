import { exchangeAPIs } from '@/APIs/exchangeAPI';
import CurrencyExchangeContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyExchangeContainer';
import CurrencyInputContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyInputContainer';
import { usePolling } from '@/hooks/usePolling';
import { ExchangeRate } from '@/types/ExchangeRate';
import { useEffect, useState } from 'react';

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

interface HomePageProps {
	rates: ExchangeRate;
}

export default function Home({ rates }: HomePageProps) {
	const [baseValue, setBaseValue] = useState<number>(0);
	const [exchangeRate, setExchangeRate] = useState<ExchangeRate>(rates);

	const { data, error } = usePolling(
		async () => await exchangeAPIs.getRateBasedOnCode('AUD'),
		10000
	);

	useEffect(() => {
		if (data) {
			setExchangeRate(data);
		}
	}, [data]);

	const onCurrencyInputSubmit = (value: number) => {
		setBaseValue(value);
	};

	if (error) {
		return <div>NetWorking error, reloading...</div>;
	}

	return (
		<>
			<main className="w-full py-6 gap-12 flex flex-col gap-12 justify-center">
				<section className="w-full flex justify-center">
					<CurrencyInputContainer onSubmitCallback={onCurrencyInputSubmit} />
				</section>
				<section className="w-full flex flex-col gap-3 items-center">
					{preDefinedCurrency.map((curr) => (
						<CurrencyExchangeContainer
							key={curr.exchangeToCode}
							exchangeRate={exchangeRate[curr.exchangeToCode] as number}
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

export async function getServerSideProps() {
	const rates = await exchangeAPIs.getRateBasedOnCode('AUD');

	return {
		props: {
			rates,
		},
	};
}
