import React, { useState, Dispatch, SetStateAction, useEffect } from 'react';

interface key {
	symbol: string;
	active: [boolean, Dispatch<SetStateAction<boolean>>];
}

const Keyboard: React.FC = () => {
	const keys: key[] = [
		{ symbol: 'Backspace', active: useState<boolean>(false) },
		{ symbol: 'q', active: useState<boolean>(false) },
		{ symbol: 'w', active: useState<boolean>(false) },
		{ symbol: 'e', active: useState<boolean>(false) },
		{ symbol: 'r', active: useState<boolean>(false) },
		{ symbol: 't', active: useState<boolean>(false) },
		{ symbol: 'y', active: useState<boolean>(false) },
		{ symbol: 'u', active: useState<boolean>(false) },
		{ symbol: 'i', active: useState<boolean>(false) },
		{ symbol: 'o', active: useState<boolean>(false) },
		{ symbol: 'p', active: useState<boolean>(false) },
		{ symbol: 'a', active: useState<boolean>(false) },
		{ symbol: 's', active: useState<boolean>(false) },
		{ symbol: 'd', active: useState<boolean>(false) },
		{ symbol: 'f', active: useState<boolean>(false) },
		{ symbol: 'g', active: useState<boolean>(false) },
		{ symbol: 'h', active: useState<boolean>(false) },
		{ symbol: 'j', active: useState<boolean>(false) },
		{ symbol: 'k', active: useState<boolean>(false) },
		{ symbol: 'l', active: useState<boolean>(false) },
		{ symbol: 'z', active: useState<boolean>(false) },
		{ symbol: 'x', active: useState<boolean>(false) },
		{ symbol: 'c', active: useState<boolean>(false) },
		{ symbol: 'v', active: useState<boolean>(false) },
		{ symbol: 'b', active: useState<boolean>(false) },
		{ symbol: 'n', active: useState<boolean>(false) },
		{ symbol: 'm', active: useState<boolean>(false) },
		{ symbol: ' ', active: useState<boolean>(false) },
	];

	window.onkeydown = (event: KeyboardEvent) => {
		toggleKey(event.key, true);
	};
	window.onkeyup = (event: KeyboardEvent) => {
		toggleKey(event.key, false);
	};

	const toggleKey = (targetKey: string, flag: boolean) => {
		for (const key of keys) {
			if (key.symbol === targetKey) {
				key.active[1](flag);
			}
		}
	};

	const keysToShow = [
		[keys[0]],
		keys.slice(1, 11),
		keys.slice(11, 20),
		keys.slice(20, 27),
		[keys[27]],
	];

	return (
		<div className='absolute inset-0 w-full h-full -z-10 flex justify-center items-center pointer-events-none overflow-hidden'>
			<div className='flex flex-col gap-4'>
				{keysToShow.map((keys: key[], index: number) => (
					<div
						key={index}
						className='flex gap-4 w-full justify-center first:justify-end'
					>
						{keys.map((key: key) => (
							<span
								key={key.symbol}
								className={`border-4 border-accent font-bold rounded-xl w-30 h-30 text-accent flex 
									justify-center items-center font-montserrat text-5xl uppercase transition-all duration-75 ${
										key.symbol === ' ' && 'w-space'
									} ${key.symbol === 'Backspace' && 'w-64'} 
									${key.active[0] ? 'opacity-10 scale-105' : 'opacity-5 scale-100'}`}
							>
								{key.symbol === 'Backspace' ? '←' : key.symbol}
							</span>
						))}
					</div>
				))}
			</div>
		</div>
	);
};

export default Keyboard;
