import React, { useState } from 'react';

interface Props {
	initialSeconds: number;
	setInitialSeconds: (arg0: number) => void;
	setIsGameInfinite: (arg0: boolean) => void;
}

const TimeSelect: React.FC<Props> = ({
	initialSeconds,
	setInitialSeconds,
	setIsGameInfinite,
}) => {
	const options: string[] = ['60s', '30s', '15s', '∞'];

	const [isExpanded, setIsExpanded] = useState<boolean>(false);
	const [currentValue, setCurrentValue] = useState<string>(
		initialSeconds === Infinity ? '∞' : `${initialSeconds}s`
	);

	const setSeconds = (index: number) => {
		const seconds =
			options[index] === '∞' ? Infinity : parseInt(options[index]);
		setIsGameInfinite(options[index] === '∞');
		setInitialSeconds(seconds);
		setCurrentValue(options[index]);
		console.log(currentValue);
		localStorage.setItem('initSec', String(seconds));
		toggleList();
	};

	const toggleList = () => {
		setIsExpanded((prevValue: boolean) => !prevValue);
	};

	return (
		<div className='h-14 w-32 flex items-center text-4xl font-semibold text-accent bg-transparent relative select-none'>
			<div
				className={`absolute left-0 top-0 py-1 w-full rounded-xl border-4 border-solid border-accent overflow-hidden
					bg-transparent transition-all h-14 ${
						isExpanded && 'h-60'
					} flex flex-col gap-0.5`}
			>
				<button
					onClick={toggleList}
					className='w-full flex justify-between border-b-4 border-accent px-2 pb-1'
				>
					<span>{currentValue}</span>
					<span
						className={`rotate-0 ${!isExpanded && 'rotate-90'} transition-all`}
					>
						˅
					</span>
				</button>
				<ul className='w-full flex flex-col gap-1'>
					{options.map((option: string, index: number) => (
						<li
							key={index}
							className='border-accent px-2'
						>
							<button
								className='relative
								before:w-0 before:absolute before:rounded-xl before:left-0 before:bottom-0 before:h-1 before:bg-accent hover:before:w-full before:transition-all'
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
