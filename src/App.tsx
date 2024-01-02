import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TextField from './components/TextField';
import Options from './components/Options';
import NoMobile from './components/NoMobile';
import GameEnding from './components/GameEnding';

const App: React.FC = () => {
	const [initialSeconds, setInitialSeconds] = useState<number>(60);
	const [seconds, setSeconds] = useState<number>(initialSeconds);
	const [rightWords, setRightWords] = useState<number>(0);
	const [isStarted, setIsStarted] = useState<boolean>(false);
	const [isEnded, setIsEnded] = useState<boolean>(false);
	const [accuracy, setAccuracy] = useState<number>(1);

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
			<NoMobile />
			<div className='hidden lg:flex flex-col justify-center items-center gap-10 w-full h-full bg-yellow-100'>
				<Header />
				<Options
					seconds={seconds}
					initialSeconds={initialSeconds}
					setInitialSeconds={setInitialSeconds}
					rightWords={rightWords}
					accuracy={accuracy}
				/>
				{!isEnded ? (
					<TextField
						rightWords={rightWords}
						setRightWords={setRightWords}
						setIsStarted={setIsStarted}
						setAccuracy={setAccuracy}
					/>
				) : (
					<GameEnding
						rightWords={rightWords}
						accuracy={accuracy}
						initialSeconds={initialSeconds}
					/>
				)}
			</div>
		</>
	);
};

export default App;
