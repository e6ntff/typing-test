import React from 'react';

const Preloader: React.FC = () => {
	return (
		<div className='flex justify-center items-center w-full h-full'>
			<div className='animate-spin border-8 border-transparent border-t-accent w-20 h-20 rounded-full opacity-75 transition-all'></div>
		</div>
	);
};

export default Preloader;
