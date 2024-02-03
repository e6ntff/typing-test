import React from 'react';
import TimeScreen from './TimeScreen';
import TimeSelect from './TimeSelect';
import WordsScreen from './WordsScreen';
import Store from '../utils/store';
import { observer } from 'mobx-react-lite';

const Options: React.FC = observer(() => {
	const { isGameInfinite } = Store;
	return (
		<div className='w-3/5 h-14'>
			<ul className='w-full h-full flex justify-between items-center font-montserrat'>
				<li>
					<TimeSelect />
				</li>
				<li>
					<WordsScreen />
				</li>
				{!isGameInfinite && (
					<li>
						<TimeScreen />
					</li>
				)}
			</ul>
		</div>
	);
});

export default Options;
