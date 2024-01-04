import React from 'react';

const NoMobile: React.FC = () => {
	return (
		<div className='flex lg:hidden w-full h-full bg-yellow-100 justify-center items-center'>
			<h1 className='text-2xl font-montserrat text-center text-accent'>Sorry, this app is unavailable on mobile devices</h1>
		</div>
	);
};

export default NoMobile;
