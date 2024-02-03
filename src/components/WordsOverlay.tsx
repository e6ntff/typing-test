import { observer } from 'mobx-react-lite';
import React, { memo } from 'react';
import Store from '../utils/store';

const WordsOverlay: React.FC = observer(() => {
	const { overlayWords } = Store;
	const newWords: string[][] = overlayWords.reduce(
		(acc: string[][], word: string, index) => {
			const firstIndex = index % 10;
			const secondIndex = Math.floor(index / 10);
			acc[firstIndex][secondIndex] = word;
			return acc;
		},
		[[], [], [], [], [], [], [], [], [], []]
	);
	return (
		<div className='absolute h-full w-full flex flex-col justify-between opacity-5 pointer-events-none'>
			{newWords.map((words: string[], index: number) => (
				<div
					key={index}
					className='flex overflow-hidden items-center gap-4 animate-swim'
				>
					{words.map((word: string, index: number) => (
						<p
							key={index}
							className='font-montserrat text-accent w-min font-bold'
							style={{ fontSize: `${Math.random() * 45 + 15}px` }}
						>
							{word}
						</p>
					))}
				</div>
			))}
		</div>
	);
});

export default memo(WordsOverlay);
