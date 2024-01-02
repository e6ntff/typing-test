import axios from 'axios';

const getWords = async () => {
	return await axios
		.get('https://random-word-api.herokuapp.com/word?number=1000')
		.then((data) => ({
			prev: [],
			current: data.data[0],
			next: data.data.slice(1),
		}));
};

export default getWords;
