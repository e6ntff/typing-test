import React from 'react';
import Info from './Info';
import ThemeWheel from './ThemeWheel';

interface Props {
	record: number;
	isKeyboard: boolean;
	setIsKeyboard: (arg0: (arg0: boolean) => boolean) => void;
}

const Header: React.FC<Props> = ({ record, isKeyboard, setIsKeyboard }) => {
	return (
		<header className='absolute hidden lg:flex justify-between px-10 py-10 w-full h-min inset-0'>
			<Info
				record={record}
				isKeyboard={isKeyboard}
				setIsKeyboard={setIsKeyboard}
			/>
			<ThemeWheel />
		</header>
	);
};

export default Header;
