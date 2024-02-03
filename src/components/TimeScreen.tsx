import { observer } from 'mobx-react-lite';
import React from 'react';
import Store from '../utils/store';

const TimeScreen: React.FC = observer(() => {
	const { seconds } = Store;

	return (
		<span className='font-semibold text-5xl text-accent transition-all select-none'>{`${Math.floor(
			seconds / 60
		)
			.toString()
			.padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`}</span>
	);
});

export default TimeScreen;
