import axios from 'axios';
import mixWords from './mixWords';

const getWords = async () => {
	try {
		const data = [
			await axios
				.get('https://random-word-api.herokuapp.com/word?number=200&length=4')
				.then((data) => data.data),
			await axios
				.get('https://random-word-api.herokuapp.com/word?number=200&length=5')
				.then((data) => data.data),
			await axios
				.get('https://random-word-api.herokuapp.com/word?number=200&length=6')
				.then((data) => data.data),
			await axios
				.get('https://random-word-api.herokuapp.com/word?number=200&length=7')
				.then((data) => data.data),
			await axios
				.get('https://random-word-api.herokuapp.com/word?number=200&length=8')
				.then((data) => data.data),
		].flat(Infinity);
		return {
			main: {
				prev: [],
				current: data[0],
				next: data.slice(1),
			},
			overlay: data,
		};
	} catch (error) {
		console.error(error)
		return {
			main: {
				prev: [],
				current: 'sorry',
				next: [
					'we',
					'can',
					'not',
					'get',
					'words',
					'for',
					'you',
					'but',
					'you',
					'can',
					'type',
					'these',
				],
			},
			overlay: new Array(1000).fill('error'),
		};
	}
};

export default getWords;
