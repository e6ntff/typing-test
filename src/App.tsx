import React, { useState } from 'react';
import Header from './components/Header';
import TextField from './components/TextField';
import Options from './components/Options';

const App: React.FC = () => {
	const [initialSeconds, setInitialSeconds] = useState<number>(60);
	const [seconds, setSeconds] = useState<number>(initialSeconds);

	return (
		<>
			<div className='hidden lg:flex flex-col justify-center items-center gap-10 w-full h-full bg-yellow-100'>
				<Header />
				<Options
					seconds={seconds}
					setInitialSeconds={setInitialSeconds}
				/>
				<TextField />
			</div>
		</>
	);
};

export default App;
