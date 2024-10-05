import { exchangeAPIs } from '@/APIs/exchangeAPI';
import { useRouter } from 'next/router';
import React from 'react';
import dayjs from 'dayjs';
import { DateRate } from '@/types/ExchangeRate';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from 'chart.js';
import { ANALYTICS_PATHS } from '@/constants/AnalyticsPaths';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface AnalyticsProps {
	data: DateRate[];
}

const Analytics = ({ data }: AnalyticsProps) => {
	const router = useRouter();
	const { param } = router.query;

	const fromCurrency = (param as string)?.split('-')[0];
	const toCurrency = (param as string)?.split('-')[1];

	const handleGoBack = () => {
		router.back();
	};

	const lineChartData = {
		labels: data.map((item) => item.date),
		datasets: [
			{
				label: param as string,
				data: data.map((item) => item.rate),
				borderColor: '#2767b5',
			},
		],
	};

	return (
		<main className="flex flex-col items-start gap-2 w-10/12 mt-4">
			<button
				className="hover:text-focus text-lg font-bold"
				onClick={handleGoBack}
			>
				{'<'} Go Back
			</button>

			<h2>
				Historical data of exchange from {fromCurrency} to {toCurrency}:
			</h2>

			<Line data={lineChartData} />
		</main>
	);
};

export default Analytics;

export async function getStaticPaths() {
	return ANALYTICS_PATHS;
}

export async function getStaticProps({
	params: { param },
}: {
	params: { param: string };
}) {
	// get the YYYY-MM-DD formatted date data for past 14 days
	const dates: string[] = [];
	const transferToCurrency = param.split('-').at(1);
	for (let i = 14; i >= 1; i--) {
		const date = dayjs().subtract(i, 'days').format('YYYY-MM-DD');
		dates.push(date);
	}

	const results = await Promise.all(
		dates.map((date) => {
			return exchangeAPIs.getHistoricalRateBasedOnCode('AUD', date);
		})
	);

	const data = results.map((res, index) => {
		if (res === null) {
			return {
				date: dates[index],
				rate: 0,
			};
		}
		return {
			date: dates[index],
			rate: res[transferToCurrency as string],
		};
	});

	return {
		props: {
			data,
		},
		revalidate: 1800,
	};
}
