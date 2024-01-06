import React from 'react';
import RecordScreen from './RecordScreen';
import OverlayCheckbox from './OverlayCheckbox';

interface Props {
	record: number;
	isKeyboard: boolean;
	setIsKeyboard: (arg0: (arg0: boolean) => boolean) => void;
}

const Info: React.FC<Props> = ({ record, isKeyboard, setIsKeyboard }) => {
	return (
		<div className='flex gap-5 items-center'>
			<RecordScreen record={record} />
			<OverlayCheckbox
				isKeyboard={isKeyboard}
				setIsKeyboard={setIsKeyboard}
			/>
		</div>
	);
};

export default Info;
