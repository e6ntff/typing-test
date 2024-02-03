import React from 'react';
import Info from './Info';
import ThemeWheel from './ThemeWheel';

const Header: React.FC = () => {
	return (
		<header className='absolute hidden lg:flex justify-between px-10 py-10 w-full h-min inset-0'>
			<Info />
			<ThemeWheel />
		</header>
	);
};

export default Header;
