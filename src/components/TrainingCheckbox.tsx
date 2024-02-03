import React, { useCallback } from 'react';

interface Props {
	isTrainingMode: boolean;
	setIsTrainingMode: (arg0: (arg0: boolean) => boolean) => void;
}

const TrainingCheckbox: React.FC<Props> = ({
	isTrainingMode,
	setIsTrainingMode,
}) => {
	const setMode = useCallback(() => {
		setIsTrainingMode((prev: boolean) => {
			localStorage.setItem('mode', !prev ? 'train' : 'chill');
			return !prev;
		});
	}, [setIsTrainingMode]);

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
};

export default TrainingCheckbox;
