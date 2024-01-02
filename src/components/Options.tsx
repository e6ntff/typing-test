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
}

const Options: React.FC<Props> = ({
	seconds,
	initialSeconds,
	setInitialSeconds,
	rightWords,
	accuracy,
}) => {
	return (
		<div className='w-3/5 h-14'>
			<ul className='w-full h-full flex justify-between items-center'>
				<li>
					<TimeSelect
						initialSeconds={initialSeconds}
						setInitialSeconds={setInitialSeconds}
					/>
				</li>
				<li>
					<WordsScreen
						rightWords={rightWords}
						accuracy={accuracy}
					/>
				</li>
				<li>
					<TimeScreen seconds={seconds} />
				</li>
			</ul>
		</div>
	);
};

export default Options;
