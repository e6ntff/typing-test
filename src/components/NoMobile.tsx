import React from 'react';

const NoMobile: React.FC = () => {
	return (
		<div className='flex lg:hidden w-full h-full justify-center items-center'>
			<h1 className='text-2xl font-montserrat text-center text-accent transition-all'>Sorry, this app is unavailable on mobile devices</h1>
		</div>
	);
};

export default NoMobile;
