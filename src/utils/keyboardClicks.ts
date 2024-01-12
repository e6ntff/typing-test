const clicksSounds: string[] = [
	'https://assets.mixkit.co/active_storage/sfx/2533/2533-preview.mp3',
];

const playRandomSound = () => {
	const sound = new Audio(
		clicksSounds[Math.floor(Math.random() * clicksSounds.length)]
	);
	sound.volume = 0.05;
	sound.play();
	// sound.ended
};

export default playRandomSound;
