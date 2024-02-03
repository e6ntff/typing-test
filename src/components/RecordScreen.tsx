import { observer } from 'mobx-react-lite';
import React from 'react';
import Store from '../utils/store';

const RecordScreen: React.FC = observer(() => {
	const { record } = Store;
	return (
		<span className='font-montserrat text-4xl font-semibold text-accent transition-all select-none'>
			Record: {record} wpm
		</span>
	);
});

export default RecordScreen;
