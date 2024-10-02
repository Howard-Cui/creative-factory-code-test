import Header from '@/components/Header';
import React from 'react';

interface PageLayoutProps {
	children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
	return (
		<>
			<Header>Convert</Header>
			{children}
		</>
	);
};

export default PageLayout;
