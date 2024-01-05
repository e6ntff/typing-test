import axios from 'axios';

const getWords = async () => {
	try {
		return await axios
			.get('https://random-word-api.herokuapp.com/word?number=1000')
			.then((data) => ({
				prev: [],
				current: data.data[0],
				next: data.data.slice(1),
			}));
	} catch (error) {
		alert(error);
		return {
			prev: [],
			current: '',
			next: [],
		};
	}
};

export default getWords;
