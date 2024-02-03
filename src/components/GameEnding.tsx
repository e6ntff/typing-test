import React, { useEffect } from 'react';
import Store from '../utils/store';
import { observer } from 'mobx-react-lite';

const GameEnding: React.FC = observer(() => {
	const { rightWords, accuracy, initialSeconds, record, setRecord } = Store;

	const saveRecord = (newRecord: number) => {
		if (newRecord > record) {
			setRecord(newRecord);
			localStorage.setItem('record', String(newRecord));
		}
	};

	const rightWordsPerMinute = rightWords * (60 / initialSeconds);
	useEffect(() => {
		saveRecord(rightWordsPerMinute);
	}, [rightWordsPerMinute, saveRecord]);

	return (
		<div className='flex flex-col gap-5 items-center select-none'>
			<span className='text-3xl text-accent transition-all font-montserrat'>
				You're typing {rightWordsPerMinute} words per minute with accuracy{' '}
				{Math.round(accuracy * 100)}%
			</span>
			<button
				className='w-32 h-16 border-accent border-2 text-xl flex justify-center items-center
				 uppercase font-montserrat font-semibold rounded-lg text-accent transition-all'
				onClick={() => window.location.reload()}
			>
				reload&nbsp;&#8634;
			</button>
		</div>
	);
});

export default GameEnding;
