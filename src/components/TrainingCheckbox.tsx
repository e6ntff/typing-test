import { observer } from 'mobx-react-lite';
import React, { useCallback } from 'react';
import Store from '../utils/store';

const TrainingCheckbox: React.FC = observer(() => {
	const { isTrainingMode, toggleIsTrainingMode } = Store;

	const setMode = useCallback(() => {
		toggleIsTrainingMode();
	}, [toggleIsTrainingMode]);

	return (
		<div
			className='w-36 h-14 text-4xl flex justify-center items-center select-none uppercase 
				font-montserrat font-semibold cursor-pointer border-4 border-accent rounded-xl text-accent transition-all'
			onClick={setMode}
		>
			<span className='relative before:rounded-xl before:w-0 before:absolute before:left-0 before:bottom-0 before:h-1 before:bg-accent hover:before:w-full before:transition-all'>
				{isTrainingMode ? 'train' : 'chill'}
			</span>
		</div>
	);
});

export default TrainingCheckbox;
