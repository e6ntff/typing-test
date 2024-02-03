import React from 'react';
import Store from '../utils/store';
import { observer } from 'mobx-react-lite';

const WordsScreen: React.FC = observer(() => {
	const { rightWords, accuracy } = Store;
	return (
		<span className='font-semibold text-5xl text-accent transition-all select-none'>
			{rightWords}&nbsp;words/{Math.round(accuracy * 100)}%
		</span>
	);
});

export default WordsScreen;
