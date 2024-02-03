import React, { SetStateAction, Dispatch, useCallback, useState } from 'react';

interface key {
	symbol: string;
	active: [boolean, Dispatch<SetStateAction<boolean>>];
}

interface Props {
	selectedSymbols: string[];
	setSelectedSymbols: (arg0: string[]) => void;
}

const TrainingKeyboard: React.FC<Props> = ({
	selectedSymbols,
	setSelectedSymbols,
}) => {
	const keys: key[] = [
		{ symbol: 'Backspace', active: useState<boolean>(true) },
		{ symbol: 'q', active: useState<boolean>(true) },
		{ symbol: 'w', active: useState<boolean>(true) },
		{ symbol: 'e', active: useState<boolean>(true) },
		{ symbol: 'r', active: useState<boolean>(true) },
		{ symbol: 't', active: useState<boolean>(true) },
		{ symbol: 'y', active: useState<boolean>(true) },
		{ symbol: 'u', active: useState<boolean>(true) },
		{ symbol: 'i', active: useState<boolean>(true) },
		{ symbol: 'o', active: useState<boolean>(true) },
		{ symbol: 'p', active: useState<boolean>(true) },
		{ symbol: 'a', active: useState<boolean>(true) },
		{ symbol: 's', active: useState<boolean>(true) },
		{ symbol: 'd', active: useState<boolean>(true) },
		{ symbol: 'f', active: useState<boolean>(true) },
		{ symbol: 'g', active: useState<boolean>(true) },
		{ symbol: 'h', active: useState<boolean>(true) },
		{ symbol: 'j', active: useState<boolean>(true) },
		{ symbol: 'k', active: useState<boolean>(true) },
		{ symbol: 'l', active: useState<boolean>(true) },
		{ symbol: 'z', active: useState<boolean>(true) },
		{ symbol: 'x', active: useState<boolean>(true) },
		{ symbol: 'c', active: useState<boolean>(true) },
		{ symbol: 'v', active: useState<boolean>(true) },
		{ symbol: 'b', active: useState<boolean>(true) },
		{ symbol: 'n', active: useState<boolean>(true) },
		{ symbol: 'm', active: useState<boolean>(true) },
		{ symbol: ' ', active: useState<boolean>(true) },
	];

	const keysToShow = [
		[keys[0]],
		keys.slice(1, 11),
		keys.slice(11, 20),
		keys.slice(20, 27),
		[keys[27]],
	];

	const [isExpanded, setIsExpanded] = useState<boolean>(false);

	const toggleList = useCallback(() => {
		setIsExpanded((prevValue: boolean) => !prevValue);
	}, []);

	return (
		<div className='h-14 w-60 flex items-center text-4xl font-semibold font-montserrat text-accent bg-transparent relative select-none z-10'>
			<div
				className={`absolute left-0 top-0 py-1 w-full rounded-xl border-4 border-solid border-accent overflow-hidden
				transition-all h-14 ${isExpanded && 'h-62 w-menu'} flex flex-col gap-0.5`}
			>
				<button
					onClick={toggleList}
					className='w-full flex justify-between border-b-4 border-accent px-2 pb-1'
				>
					<span className='uppercase'>Symbols</span>
					<span
						className={`rotate-0 ${!isExpanded && 'rotate-90'} transition-all`}
					>
						˅
					</span>
				</button>
				<div className='flex flex-col gap-1 mt-1'>
					{keysToShow.map((keys: key[], index: number) => (
						<div
							key={index}
							className='flex gap-1 w-full justify-center first:justify-end'
						>
							{keys.map((key: key) => (
								<span
									key={key.symbol}
									className={`border-2 border-accent font-bold rounded-md w-8 h-8 text-accent flex 
									justify-center items-center font-montserrat text-lg uppercase transition-all duration-75 hover:opacity-75 hover:scale-105 ${
										key.symbol === ' ' && 'w-spacemin'
									} ${key.symbol === 'Backspace' && ' w-backspacemin me-1'} 
									${key.active[0] ? 'opacity-100' : 'opacity-50'}`}
								>
									{key.symbol === 'Backspace' ? '←' : key.symbol}
								</span>
							))}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default TrainingKeyboard;
