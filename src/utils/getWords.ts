import axios from 'axios';

const getWords = async () => {
	try {
		return await axios
			.get('https://random-word-api.herokuapp.com/word?number=1000')
			.then((data) => ({
				main: {
					prev: [],
					current: data.data[0],
					next: data.data.slice(1),
				},
				overlay: data.data,
			}));
	} catch (error) {
		alert(error);
		return {
			main: {
				prev: [],
				current: '',
				next: [],
			},
			overlay: [],
		};
	}
};

export default getWords;
