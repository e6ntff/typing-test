import React, { useEffect, useState } from 'react';
import Title from './components/Title';
import TextField from './components/TextField';
import Options from './components/Options';
import NoMobile from './components/NoMobile';
import GameEnding from './components/GameEnding';
import getWords from './utils/getWords';
import WordsOverlay from './components/WordsOverlay';
import Preloader from './components/Preloader';
import Keyboard from './components/Keyboard';
import Header from './components/Header';

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
	const [isLoaded, setIsLoaded] = useState<boolean>(false);
	const [initialSeconds, setInitialSeconds] = useState<number>(60);
	const [seconds, setSeconds] = useState<number>(initialSeconds);
	const [isGameInfinite, setIsGameInfinite] = useState<boolean>(false);
	const [rightWords, setRightWords] = useState<number>(0);
	const [isStarted, setIsStarted] = useState<boolean>(false);
	const [isEnded, setIsEnded] = useState<boolean>(false);
	const [accuracy, setAccuracy] = useState<number>(1);
	const [record, setRecord] = useState<number>(0);
	const [overlayWords, setOverlayWords] = useState<string[]>([]);
	const [isKeyboard, setIsKeyboard] = useState<boolean>(false);
	const [wordsData, setWordsData] = useState<words>({
		prev: [],
		current: '',
		next: [],
	});

	useEffect(() => {
		if (wordsData.next.length <= 5 && isLoaded) {
			getWords().then(({ main }) => {
				setWordsData((prevWords: words) => ({
					...prevWords,
					next: [...prevWords.next.slice(0, 5), ...main.next],
				}));
			});
		}
	}, [wordsData]);

	useEffect(() => {
		setRecord(Number(localStorage.getItem('record')) || 0);
		setIsKeyboard(Boolean(localStorage.getItem('keys')));
		setInitialSeconds(Number(localStorage.getItem('initSec') || 60));
	}, []);

	const saveRecord = (newRecord: number) => {
		if (newRecord > record) {
			setRecord(newRecord);
			localStorage.setItem('record', String(newRecord));
		}
	};

	useEffect(() => {
		getWords().then(({ main, overlay }) => {
			setIsLoaded(true);
			setWordsData(main);
			setOverlayWords(overlay);
		});
	}, []);

	useEffect(() => {
		if (initialSeconds === Infinity) {
			setIsGameInfinite(true);
		}

		setIsStarted(false);
		setRightWords(0);
		setSeconds(initialSeconds);
		getWords().then(({ main }) => {
			setWordsData(main);
		});
	}, [initialSeconds]);

	useEffect(() => {
		const timerId =
			isStarted && !isGameInfinite
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

	return (
		<>
			{isLoaded ? (
				<>
					{isKeyboard ? <Keyboard /> : <WordsOverlay words={overlayWords} />}
					<div className='hidden lg:flex flex-col justify-center items-center gap-10 w-full h-full transition-all'>
						<Title />
						{!isEnded ? (
							<>
								<Options
									seconds={seconds}
									initialSeconds={initialSeconds}
									setInitialSeconds={setInitialSeconds}
									rightWords={rightWords}
									accuracy={accuracy}
									isGameInfinite={isGameInfinite}
									setIsGameInfinite={setIsGameInfinite}
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
			) : (
				<Preloader />
			)}
			<NoMobile />
			<Header
				record={record}
				isKeyboard={isKeyboard}
				setIsKeyboard={setIsKeyboard}
			/>
		</>
	);
};

export default App;
