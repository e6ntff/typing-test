import React from 'react';
import TimeScreen from './TimeScreen';
import TimeSelect from './TimeSelect';
import WordsScreen from './WordsScreen';

interface Props {
	seconds: number;
	initialSeconds: number;
	setInitialSeconds: (arg0: number) => void;
	rightWords: number;
	accuracy: number;
	isGameInfinite: boolean;
	setIsGameInfinite: (arg0: boolean) => void;
}

const Options: React.FC<Props> = ({
	seconds,
	initialSeconds,
	setInitialSeconds,
	rightWords,
	accuracy,
	isGameInfinite,
	setIsGameInfinite,
}) => {
	return (
		<div className='w-3/5 h-14'>
			<ul className='w-full h-full flex justify-between items-center font-montserrat'>
				<li>
					<TimeSelect
						initialSeconds={initialSeconds}
						setInitialSeconds={setInitialSeconds}
						setIsGameInfinite={setIsGameInfinite}
					/>
				</li>
				<li>
					<WordsScreen
						rightWords={rightWords}
						accuracy={accuracy}
					/>
				</li>
				{!isGameInfinite && (
					<li>
						<TimeScreen seconds={seconds} />
					</li>
				)}
			</ul>
		</div>
	);
};

export default Options;
