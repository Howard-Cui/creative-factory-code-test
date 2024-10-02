import CurrencyInputContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyInputContainer';

export default function Home() {
	const onCurrencyInputSubmit = (value: number) => {
		console.log(value);
	};

	return (
		<>
			<main className="w-full py-6 gap-4">
				<CurrencyInputContainer onSubmitCallback={onCurrencyInputSubmit} />
			</main>
		</>
	);
}
