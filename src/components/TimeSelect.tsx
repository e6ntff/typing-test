import React from 'react';

interface Props {
	initialSeconds: number;
	setInitialSeconds: (arg0: number) => void;
}

const TimeSelect: React.FC<Props> = ({ initialSeconds, setInitialSeconds }) => {
	const setSeconds = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const seconds = parseInt(event.target.value);
		setInitialSeconds(seconds);
		localStorage.setItem('initSec', String(seconds));
	};

	return (
		<div className='h-full w-28 flex items-center text-3xl font-semibold text-accent'>
			<span>🕑</span>
			<select
				value={initialSeconds.toString()}
				onChange={setSeconds}
				className='w-full h-full bg-transparent rounded-xl border-2 border-solid border-accent'
			>
				<option
					className='font-semibold'
					value='60'
				>
					60s
				</option>
				<option
					className='font-semibold'
					value='30'
				>
					30s
				</option>
				<option
					className='font-semibold'
					value='15'
				>
					15s
				</option>
			</select>
		</div>
	);
};

export default TimeSelect;
