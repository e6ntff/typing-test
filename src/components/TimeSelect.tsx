import React, { useState } from 'react';

interface Props {
	initialSeconds: number;
	setInitialSeconds: (arg0: number) => void;
}

const TimeSelect: React.FC<Props> = ({ initialSeconds, setInitialSeconds }) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const setSeconds = (index: number) => {
		const seconds = parseInt(data.options[index]);
		setInitialSeconds(seconds);
		localStorage.setItem('initSec', String(seconds));
		toggleList();
	};

	const toggleList = () => {
		setIsExpanded((prevValue: boolean) => !prevValue);
	};

	const data = {
		value: initialSeconds,
		options: ['60s', '30s', '15s'],
	};

	return (
		<div className='h-full flex items-center text-3xl font-semibold text-accent bg-transparent'>
			<span>🕑</span>
			<div
				className={`w-24 h-full rounded-xl border-4 border-solid border-accent relative bg-transparent transition-all
			${isExpanded && 'rounded-b-none border-b-0 border-b-transparent'}`}
			>
				<button
					onClick={toggleList}
					className='w-full h-full flex justify-between px-1'
				>
					<span>{data.value}s</span>
					<span className={`${!isExpanded && 'rotate-90'} transition-all`}>
						˅
					</span>
				</button>
				<ul className='h-full w-24 -ms-1 absolute left-0 top-full transition-all'>
					{data.options.map((option: string, index: number) => (
						<li
							key={index}
							className={`h-0 overflow-hidden transition-all border-accent px-1 last:border-transparent last:border-t-0 
								last:rounded-b-xl last:box-content last:pb-1 ${
									isExpanded &&
									'h-full border-x-4 last:border-4 last:border-accent'
								}`}
						>
							<button
								className='relative transition-all 
								before:w-0 before:absolute before:left-0 before:bottom-0 before:h-0.5 before:bg-accent hover:before:w-full before:transition-all '
								onClick={() => setSeconds(index)}
							>
								{option}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default TimeSelect;
