import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import Store from '../utils/store';

const OverlayCheckbox: React.FC = observer(() => {
	const { isKeyboard, toggleIsKeyboard } = Store;

	const setOverlay = useCallback(() => {
		toggleIsKeyboard();
	}, [toggleIsKeyboard]);

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
});

export default OverlayCheckbox;
