import React from 'react';
import Info from './Info';
import ThemeWheel from './ThemeWheel';

interface Props {
	record: number;
	isKeyboard: boolean;
	setIsKeyboard: (arg0: (arg0: boolean) => boolean) => void;
	isTrainingMode: boolean;
	setIsTrainingMode: (arg0: (arg0: boolean) => boolean) => void;
	selectedSymbols: string[];
	setSelectedSymbols: (arg0: string[]) => void;
}

const Header: React.FC<Props> = ({
	record,
	isKeyboard,
	setIsKeyboard,
	isTrainingMode,
	setIsTrainingMode,
	selectedSymbols,
	setSelectedSymbols,
}) => {
	return (
		<header className='absolute hidden lg:flex justify-between px-10 py-10 w-full h-min inset-0'>
			<Info
				record={record}
				isKeyboard={isKeyboard}
				setIsKeyboard={setIsKeyboard}
				isTrainingMode={isTrainingMode}
				setIsTrainingMode={setIsTrainingMode}
				selectedSymbols={selectedSymbols}
				setSelectedSymbols={setSelectedSymbols}
			/>
			<ThemeWheel />
		</header>
	);
};

export default Header;
