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
import { observer } from 'mobx-react-lite';
import Store from './utils/store';

const App: React.FC = observer(() => {
	const {
		wordsData,
		setWordsData,
		isLoaded,
		setIsLoaded,
		initialSeconds,
		seconds,
		setSeconds,
		isGameInfinite,
		setRightWords,
		isStarted,
		setIsStarted,
		setOverlayWords,
		setIsEnded,
		isKeyboard,
		isEnded,
	} = Store;

	useEffect(() => {
		if (wordsData.next.length <= 5 && isLoaded) {
			getWords().then(({ main }) => {
				setWordsData({
					...wordsData,
					next: [...wordsData.next.slice(0, 5), ...main.next],
				});
			});
		}
	}, [wordsData, isLoaded]);

	useEffect(() => {
		getWords().then(({ main, overlay }) => {
			setIsLoaded(true);
			setWordsData(main);
			setOverlayWords(overlay);
		});
	}, []);

	useEffect(() => {
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
						setSeconds(seconds - 1);
				  }, 1000)
				: '';
		if (seconds === 0) {
			clearInterval(timerId);
			setIsEnded(true);
		}
		return () => {
			clearInterval(timerId);
		};
	}, [isStarted, seconds, isGameInfinite]);

	return (
		<>
			{isLoaded ? (
				<>
					{isKeyboard ? <Keyboard /> : <WordsOverlay />}
					<div className='hidden lg:flex flex-col justify-center items-center gap-10 w-full h-full transition-all'>
						<Title />
						{!isEnded ? (
							<>
								<Options />
								<TextField />
							</>
						) : (
							<GameEnding />
						)}
					</div>
				</>
			) : (
				<Preloader />
			)}
			<NoMobile />
			<Header />
		</>
	);
});

export default App;
