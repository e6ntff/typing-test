import React from 'react';
import RecordScreen from './RecordScreen';
import OverlayCheckbox from './OverlayCheckbox';
import TrainingCheckbox from './TrainingCheckbox';
import TrainingKeyboard from './TrainingKeyboard';
import Store from '../utils/store';
import { observer } from 'mobx-react-lite';

const Info: React.FC = observer(() => {
	const { isTrainingMode } = Store;
	return (
		<div className='flex gap-5 items-center'>
			<RecordScreen />
			<OverlayCheckbox />
			<TrainingCheckbox />
			{isTrainingMode && <TrainingKeyboard />}
		</div>
	);
});

export default Info;
