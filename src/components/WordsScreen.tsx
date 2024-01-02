import React from 'react';

interface Props {
	rightWords: number;
	accuracy: number;
}

const WordsScreen: React.FC<Props> = ({ rightWords, accuracy }) => {
	return (
		<span className='font-semibold text-5xl'>
			{rightWords}&nbsp;words/{Math.round(accuracy * 100)}%
		</span>
	);
};

export default WordsScreen;