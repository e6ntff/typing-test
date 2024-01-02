import React from 'react';
import TimeScreen from './TimeScreen';
import TimeSelect from './TimeSelect';

interface Props {
	seconds: number;
	setInitialSeconds: (arg0: number) => void;
}

const Options: React.FC<Props> = ({ seconds, setInitialSeconds }) => {
	return (
		<div className='w-1/2 h-10'>
			<ul className='w-full h-full flex justify-between'>
				<li>
					<TimeScreen seconds={seconds} />
				</li>
				<li>
					<TimeSelect />
				</li>
				<li></li>
			</ul>
		</div>
	);
};

export default Options;
