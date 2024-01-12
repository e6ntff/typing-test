import React, { useCallback } from 'react';

interface Props {
	isKeyboard: boolean;
	setIsKeyboard: (arg0: (arg0: boolean) => boolean) => void;
}

const OverlayCheckbox: React.FC<Props> = ({ isKeyboard, setIsKeyboard }) => {
	const setOverlay = useCallback(() => {
		setIsKeyboard((prev: boolean) => {
			localStorage.setItem('keys', !prev ? 'keys' : '');
			return !prev;
		});
	}, [setIsKeyboard]);

	return (
		<div
			className='w-32 h-14 text-4xl flex justify-center items-center select-none uppercase 
				font-montserrat font-semibold cursor-pointer border-4 border-accent rounded-xl text-accent transition-all'
			onClick={setOverlay}
		>
			<span className='relative before:rounded-xl before:w-0 before:absolute before:left-0 before:bottom-0 before:h-1 before:bg-accent hover:before:w-full before:transition-all'>
				{!isKeyboard ? 'abc' : 'keys'}
			</span>
		</div>
	);
};

export default OverlayCheckbox;
