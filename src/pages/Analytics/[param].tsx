import { useRouter } from 'next/router';
import React from 'react';

const Analytics = () => {
	const router = useRouter();
	const { param } = router.query;

	const fromCurrency = (param as string)?.split('-')[0];
	const toCurrency = (param as string)?.split('-')[1];

	const handleGoBack = () => {
		router.back();
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
		</main>
	);
};

export default Analytics;
