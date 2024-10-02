import CurrencyInputContainer from '@/components/CurrencyInfoContainer/Customisations/CurrencyInputContainer';
import Header from '@/components/Header';

export default function Home() {
	const onCurrencyInputSubmit = (value: number) => {
		console.log(value);
	};

	return (
		<>
			<Header>Convert</Header>
			<main className="w-full py-6 gap-4">
				<CurrencyInputContainer onSubmitCallback={onCurrencyInputSubmit} />
			</main>
		</>
	);
}
