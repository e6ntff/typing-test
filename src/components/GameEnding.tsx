import React from 'react';

interface Props {
	rightWords: number;
	accuracy: number;
	initialSeconds: number;
}

const GameEnding: React.FC<Props> = ({
	rightWords,
	accuracy,
	initialSeconds,
}) => {
	return (
		<div className='flex flex-col gap-5 items-center'>
			<span className='text-3xl'>
				You're typing {rightWords * (60 / initialSeconds)} words per minute with
				accuracy {Math.round(accuracy * 100)}%
			</span>
			<button
				className='w-32 h-16 bg-yellow-500 text-xl flex justify-center items-center
				 uppercase font-montserrat font-semibold rounded-lg'
				onClick={() => window.location.reload()}
			>
				reload&nbsp;&#8634;
			</button>
		</div>
	);
};

export default GameEnding;
