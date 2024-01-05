import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TextField from './components/TextField';
import Options from './components/Options';
import NoMobile from './components/NoMobile';
import GameEnding from './components/GameEnding';
import getWords from './utils/getWords';
import ThemeWheel from './components/ThemeWheel';
import RecordScreen from './components/RecordScreen';
import WordsOverlay from './components/WordsOverlay';

interface word {
	text: string;
	isRight: boolean;
}

interface words {
	prev: word[];
	current: string;
	next: string[];
}

const App: React.FC = () => {
	const [initialSeconds, setInitialSeconds] = useState<number>(60);
	const [seconds, setSeconds] = useState<number>(initialSeconds);
	const [rightWords, setRightWords] = useState<number>(0);
	const [isStarted, setIsStarted] = useState<boolean>(false);
	const [isEnded, setIsEnded] = useState<boolean>(false);
	const [accuracy, setAccuracy] = useState<number>(1);
	const [record, setRecord] = useState<number>(0);
	const [overlayWords, setOverlayWords] = useState<string[]>([]);
	const [wordsData, setWordsData] = useState<words>({
		prev: [],
		current: '',
		next: [],
	});

	useEffect(() => {
		setRecord(Number(localStorage.getItem('record')) || 0);
	}, []);

	const saveRecord = (record: number) => {
		setRecord(record);
		localStorage.setItem('record', String(record));
	};

	useEffect(() => {
		setIsStarted(false);
		setRightWords(0);
		setSeconds(initialSeconds);
		getWords().then((data: any) => {
			setWordsData(data.main);
			setOverlayWords(data.overlay);
		});
	}, [initialSeconds]);

	useEffect(() => {
		const timerId = isStarted
			? setInterval(() => {
					setSeconds((prev: number) => prev - 1);
			  }, 1000)
			: '';
		if (seconds === 0) {
			clearInterval(timerId);
			setIsEnded(true);
		}
		return () => {
			clearInterval(timerId);
		};
	}, [isStarted, seconds]);

	useEffect(() => {
		setSeconds(initialSeconds);
	}, [initialSeconds]);

	return (
		<>
			<WordsOverlay words={overlayWords} />
			<NoMobile />
			<div className='hidden lg:flex flex-col justify-center items-center gap-10 w-full h-full'>
				<RecordScreen record={record} />
				<ThemeWheel />
				<Header />
				{!isEnded ? (
					<>
						<Options
							seconds={seconds}
							initialSeconds={initialSeconds}
							setInitialSeconds={setInitialSeconds}
							rightWords={rightWords}
							accuracy={accuracy}
						/>
						<TextField
							rightWords={rightWords}
							setRightWords={setRightWords}
							setIsStarted={setIsStarted}
							setAccuracy={setAccuracy}
							wordsData={wordsData}
							setWordsData={setWordsData}
							initialSeconds={initialSeconds}
						/>
					</>
				) : (
					<GameEnding
						rightWords={rightWords}
						accuracy={accuracy}
						initialSeconds={initialSeconds}
						saveRecord={saveRecord}
					/>
				)}
			</div>
		</>
	);
};

export default App;
