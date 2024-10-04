import { API } from '@/libs/fetch/API';

const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;

export const exchangeAPIs = {
	getRateBasedOnCode: async (code: string) => {
		try {
			const value = await API(
				`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&base=${code}`,
				'GET'
			);
			return value?.rates ?? null;
		} catch {
			return null;
		}
	},
};
