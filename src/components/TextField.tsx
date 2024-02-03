import { observer } from 'mobx-react-lite';
import React, { useCallback, useEffect, useState } from 'react';
import Store, { word, words } from '../utils/store';

const TextField: React.FC = observer(() => {
	const {
		wordsData,
		setWordsData,
		initialSeconds,
		rightWords,
		setRightWords,
		setIsStarted,
		setAccuracy,
	} = Store;

	const [text, setText] = useState<word>({
		text: '',
		isRight: true,
	});

	useEffect(() => {
		setText({
			text: '',
			isRight: true,
		});
	}, [initialSeconds]);

	const [totalWords, setTotalWords] = useState<number>(0);

	useEffect(() => {
		setAccuracy(rightWords / (totalWords || Infinity));
	}, [totalWords, rightWords, setAccuracy]);

	const isWordRight = (word: string, reference: string) => {
		for (let i = 0; i < word.length; i++) {
			if (word[i] !== reference[i]) return false;
		}
		return true;
	};

	const changeText = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setIsStarted(true);
			if (event.target.value !== ' ') {
				if (event.target.value.at(-1) === ' ') {
					setWordsData({
						prev: [...wordsData.prev, text],
						current: wordsData.next[0],
						next: wordsData.next.slice(1),
					});
					setText({
						text: '',
						isRight: true,
					});
					setRightWords(rightWords + (wordsData.current === text.text ? 1 : 0));
					setTotalWords((prev: number) => prev + 1);
				} else {
					setText({
						text: event.target.value,
						isRight: isWordRight(event.target.value, wordsData.current),
					});
					setText((prevText) => ({ ...prevText, text: event.target.value }));
				}
			}
		},
		[
			setIsStarted,
			setWordsData,
			setText,
			setRightWords,
			setTotalWords,
			text,
			wordsData,
		]
	);

	return (
		<label className='w-full h-16 flex select-none'>
			<div
				className='w-1/2 h-full flex justify-end items-center 
				font-montserrat font-normal text-5xl text-accent transition-all'
			>
				{wordsData.prev.map((el) => (
					<span
						key={Math.random()}
						className={`opacity-50 ${
							!el.isRight && 'line-through'
						} transition-all`}
					>
						{el.text}&nbsp;
					</span>
				))}
			</div>
			<div className='w-1/2 h-full relative'>
				<input
					type='text'
					autoFocus
					className={`w-full h-full font-montserrat font-normal text-5xl text-accent outline-none bg-transparent transition-all ${
						!text.isRight && 'line-through text-red-700'
					}`}
					value={text.text}
					onInput={changeText}
				/>
				<div
					className='absolute inset-0 w-full h-full font-montserrat font-normal text-5xl 
					flex justify-start items-center text-nowrap overflow-hidden text-accent transition-all'
				>
					<span className='opacity-40'>{wordsData.current}</span>
					<span>&nbsp;{wordsData.next.join(' ')}</span>
				</div>
			</div>
		</label>
	);
});

export default TextField;
