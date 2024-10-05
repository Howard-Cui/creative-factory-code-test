import Header from '@/components/Header/Header';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/dom';

describe('Tests for Header component', () => {
	it('The text in the slot will display on the screen', () => {
		const text = 'Hello World';
		render(<Header>{text}</Header>);
		const headerText = screen.getByText(/hello world/i);
		expect(headerText).toBeInTheDocument();
	});
});
