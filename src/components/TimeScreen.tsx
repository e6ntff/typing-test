import React from 'react';

interface Props {
	seconds: number;
}

const TimeScreen: React.FC<Props> = ({ seconds }) => {
	return (
		<span>{`${Math.floor(seconds / 60)
			.toString()
			.padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`}</span>
	);
};

export default TimeScreen;
