import Header from '@/components/Header/Header';
import { useRouter } from 'next/router';
import React from 'react';

interface PageLayoutProps {
	children: React.ReactNode;
}

const PATH_TITLE = {
	home: 'Convert',
	Analytics: 'Analytics',
};

type KeyOfTitle = keyof typeof PATH_TITLE;

const PageLayout = ({ children }: PageLayoutProps) => {
	const router = useRouter();
	const path = router.asPath;
	const titleKey = path?.split('/')[1];

	return (
		<>
			<Header>
				{PATH_TITLE[titleKey as KeyOfTitle] ?? PATH_TITLE['home']}
			</Header>
			<div className="flex justify-center">{children}</div>
		</>
	);
};

export default PageLayout;
