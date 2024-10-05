import React from 'react';

interface HeaderProps {
	children: React.ReactNode;
}

const Header = ({ children }: HeaderProps) => {
	return (
		<header
			className="flex justify-center items-center w-full h-14 
    border-b border-normal_grey text-lg font-semibold bg-white
		text-[#00000084]"
		>
			{children}
		</header>
	);
};

export default Header;
