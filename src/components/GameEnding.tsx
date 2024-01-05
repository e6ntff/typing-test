import React, { useEffect } from 'react';

interface Props {
	rightWords: number;
	accuracy: number;
	initialSeconds: number;
	saveRecord: (arg0: number) => void;
}

const GameEnding: React.FC<Props> = ({
	rightWords,
	accuracy,
	initialSeconds,
	saveRecord,
}) => {
	const rightWordsPerMinute = rightWords * (60 / initialSeconds);
	useEffect(() => {
		saveRecord(rightWordsPerMinute);
	}, []);

	return (
		<div className='flex flex-col gap-5 items-center'>
			<span className='text-3xl text-accent'>
				You're typing {rightWordsPerMinute} words per minute with accuracy{' '}
				{Math.round(accuracy * 100)}%
			</span>
			<button
				className='w-32 h-16 border-accent border-2 text-xl flex justify-center items-center
				 uppercase font-montserrat font-semibold rounded-lg text-accent'
				onClick={() => window.location.reload()}
			>
				reload&nbsp;&#8634;
			</button>
		</div>
	);
};

export default GameEnding;
