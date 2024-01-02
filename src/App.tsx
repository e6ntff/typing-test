import React from 'react';
import Header from './components/Header';
import TextField from './components/TextField';

const App: React.FC = () => {
	return (
		<>
			<div className='hidden lg:flex flex-col justify-center items-center gap-10 w-full h-full bg-yellow-100'>
				<Header />
				<TextField />
			</div>
		</>
	);
};

export default App;
