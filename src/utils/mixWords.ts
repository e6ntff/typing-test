const mixWords = (words: any[]) => {
	return words.sort(() => Math.round(Math.random()) - 0.5);
};

export default mixWords;
