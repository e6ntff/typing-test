import React from 'react';

interface Props {
	initialSeconds: number;
	setInitialSeconds: (arg0: number) => void;
}

const TimeSelect: React.FC<Props> = ({ initialSeconds, setInitialSeconds }) => {
	return (
		<div className='h-full w-36 flex items-center text-3xl font-semibold'>
			<span>🕑</span>
			<select
				value={initialSeconds.toString()}
				onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
					setInitialSeconds(parseInt(event.target.value))
				}
				className='w-full h-full bg-transparent rounded-xl border-2 border-solid border-black'
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
