import React from 'react';

interface Props {
	record: number;
}

const RecordScreen: React.FC<Props> = ({ record }) => {
	return (
		<span className='font-montserrat text-4xl font-semibold text-accent transition-all select-none'>
			Record: {record} wpm
		</span>
	);
};

export default RecordScreen;
