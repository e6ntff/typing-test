import React, { useCallback, useEffect, useMemo, useState } from 'react';

interface Theme {
	name: string;
	color: string;
}

const ThemeWheel: React.FC = () => {
	const [rotation, setRotation] = useState<number>(0);

	const themes: Theme[] = useMemo(
		() => [
			{
				name: 'lofi',
				color: '#fff',
			},
			{
				name: 'dark',
				color: '#1d232a',
			},
			{
				name: 'retro',
				color: '#ece3ca',
			},
			{
				name: 'cyberpunk',
				color: '#fff248',
			},
			{
				name: 'synthwave',
				color: '#1a103d',
			},
		],
		[]
	);

	const setTheme = useCallback((theme: string, index: number = 0) => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);

		setRotation((3 - index) * 72);
	}, []);

	useEffect(() => {
		setTheme(localStorage.getItem('theme') || 'lofi');
	}, [setTheme]);

	return (
		<ul className='relative border border-neutral w-20 h-20 rounded-full'>
			{themes.map((el, index) => (
				<li key={index}>
					<button
						className='absolute w-full h-full ease-in-out rounded-full hover:scale-110 transition-all'
						style={{
							clipPath: 'url(#myClip)',
							background: el.color,
							rotate: `${72 * index + rotation}deg`,
						}}
						onClick={() => {
							setTheme(el.name, index);
						}}
					></button>
				</li>
			))}
		</ul>
	);
};

export default ThemeWheel;
