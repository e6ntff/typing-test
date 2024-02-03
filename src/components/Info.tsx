import React from 'react';
import RecordScreen from './RecordScreen';
import OverlayCheckbox from './OverlayCheckbox';
import TrainingCheckbox from './TrainingCheckbox';
import TrainingKeyboard from './TrainingKeyboard';

interface Props {
	record: number;
	isKeyboard: boolean;
	setIsKeyboard: (arg0: (arg0: boolean) => boolean) => void;
	isTrainingMode: boolean;
	setIsTrainingMode: (arg0: (arg0: boolean) => boolean) => void;
	selectedSymbols: string[];
	setSelectedSymbols: (arg0: string[]) => void;
}

const Info: React.FC<Props> = ({
	record,
	isKeyboard,
	setIsKeyboard,
	isTrainingMode,
	setIsTrainingMode,
	selectedSymbols,
	setSelectedSymbols,
}) => {
	return (
		<div className='flex gap-5 items-center'>
			<RecordScreen record={record} />
			<OverlayCheckbox
				isKeyboard={isKeyboard}
				setIsKeyboard={setIsKeyboard}
			/>
			<TrainingCheckbox
				isTrainingMode={isTrainingMode}
				setIsTrainingMode={setIsTrainingMode}
			/>
			{isTrainingMode && (
				<TrainingKeyboard
					selectedSymbols={selectedSymbols}
					setSelectedSymbols={setSelectedSymbols}
				/>
			)}
		</div>
	);
};

export default Info;
