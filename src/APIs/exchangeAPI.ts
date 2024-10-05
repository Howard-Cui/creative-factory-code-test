import { API } from '@/libs/fetch/API';

const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;
const API_ROOT = 'https://openexchangerates.org/api/';

export const exchangeAPIs = {
	getRateBasedOnCode: async (code: string) => {
		try {
			const value = await API(
				`${API_ROOT}latest.json?app_id=${API_KEY}&base=${code}`,
				'GET'
			);
			return value?.rates ?? null;
		} catch {
			return null;
		}
	},

	/**
	 *
	 * @param code the base currency code
	 * @param date the date in format of YYYY-MM-DD
	 */
	getHistoricalRateBasedOnCode: async (code: string, date: string) => {
		try {
			const value = await API(
				`${API_ROOT}historical/${date}.json?app_id=${API_KEY}&base=${code}`,
				'GET'
			);
			return value?.rates ?? null;
		} catch {
			return null;
		}
	},
};
