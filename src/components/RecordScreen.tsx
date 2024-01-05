import React from 'react';

interface Props {
	record: number;
}

const RecordScreen: React.FC<Props> = ({ record }) => {
	return (
		<span className='absolute top-5 left-5 font-montserrat text-3xl font-semibold text-accent'>
			Record: {record} wpm
		</span>
	);
};

export default RecordScreen;
