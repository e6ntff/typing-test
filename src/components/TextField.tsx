import React, { useEffect, useState } from 'react';

interface word {
	text: string;
	isRight: boolean;
}

interface wordsData {
	prev: word[];
	current: string;
	next: string[];
}

interface Props {
	rightWords: number;
	setRightWords: any;
	setIsStarted: (arg0: boolean) => void;
	setAccuracy: (arg0: number) => void;
}

const TextField: React.FC<Props> = ({
	rightWords,
	setRightWords,
	setIsStarted,
	setAccuracy,
}) => {
	const [text, setText] = useState<word>({
		text: '',
		isRight: true,
	});

	const [totalWords, setTotalWords] = useState<number>(0);

	const initialWords: string[] = [
		'mouse',
		'chair',
		'trimmer',
		'word',
		'toilet',
	];

	useEffect(() => {
		setAccuracy(rightWords / totalWords || 1);
	}, [totalWords]);

	const [wordsData, setWordsData] = useState<wordsData>({
		prev: [],
		current: initialWords[0],
		next: initialWords.slice(1),
	});

	const isWordRight = (word: string, reference: string) => {
		for (let i = 0; i < word.length; i++) {
			if (word[i] !== reference[i]) return false;
		}
		return true;
	};

	const changeText = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsStarted(true);
		if (event.target.value.at(-1) === ' ') {
			setWordsData((prevData: wordsData) => ({
				prev: [...prevData.prev, text],
				current: prevData.next[0],
				next: prevData.next.slice(1),
			}));
			setText({
				text: '',
				isRight: true,
			});
			setRightWords(
				(prev: number) => prev + (wordsData.current === text.text ? 1 : 0)
			);
			setTotalWords((prev: number) => prev + 1);
		} else {
			setText({
				text: event.target.value,
				isRight: isWordRight(event.target.value, wordsData.current),
			});
			setText((prevText) => ({ ...prevText, text: event.target.value }));
		}
	};

	return (
		<label className='w-full h-10 flex'>
			<div className='w-1/2 h-full flex justify-end items-center font-montserrat font-normal text-5xl'>
				{wordsData.prev.map((el) => (
					<span
						key={Math.random()}
						className={`opacity-50 ${!el.isRight && 'line-through'}`}
					>
						{el.text}&nbsp;
					</span>
				))}
			</div>
			<div className='w-1/2 h-full relative'>
				<input
					type='text'
					autoFocus
					className={`w-full h-full font-montserrat font-normal text-5xl outline-none bg-transparent ${
						!text.isRight && 'line-through text-red-700'
					}`}
					value={text.text}
					onInput={changeText}
				/>
				<div
					className='absolute inset-0 w-full h-full font-montserrat font-normal text-5xl 
					flex justify-start items-center text-nowrap overflow-hidden'
				>
					<span className='opacity-25'>{wordsData.current}</span>
					<span>&nbsp;{wordsData.next.join(' ')}</span>
				</div>
			</div>
		</label>
	);
};

export default TextField;
