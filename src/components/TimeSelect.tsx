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
		<div className='h-14 w-32 flex items-center text-4xl font-semibold text-accent bg-transparent relative select-none'>
			<div
				className={`absolute left-0 top-0 py-1 w-full rounded-xl border-4 border-solid border-accent overflow-hidden
					bg-transparent transition-all h-14 ${
					isExpanded && 'h-48'
				} flex flex-col gap-0.5`}
			>
				<button
					onClick={toggleList}
					className='w-full flex justify-between border-b-4 border-accent px-2 pb-1'
				>
					<span>{data.value}s</span>
					<span className={`rotate-0 ${!isExpanded && 'rotate-90'} transition-all`}>
						˅
					</span>
				</button>
				<ul className='w-full flex flex-col gap-1'>
					{data.options.map((option: string, index: number) => (
						<li
							key={index}
							className='border-accent px-2'
						>
							<button
								className='relative
								before:w-0 before:absolute before:left-0 before:bottom-0 before:h-1 before:bg-accent hover:before:w-full before:transition-all '
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
