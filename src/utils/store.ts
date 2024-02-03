import { makeAutoObservable } from 'mobx';

export interface word {
	text: string;
	isRight: boolean;
}

export interface words {
	prev: word[];
	current: string;
	next: string[];
}

class Store {
	wordsData: words = {
		prev: [],
		current: '',
		next: [],
	};
	isLoaded: boolean = false;
	initialSeconds: number = Number(localStorage.getItem('initSec') || 60);
	seconds: typeof this.initialSeconds = this.initialSeconds;
	isGameInfinite: boolean = this.initialSeconds === Infinity;
	rightWords: number = 0;
	isStarted: boolean = false;
	accuracy: number = 1;
	record: number = Number(localStorage.getItem('record')) || 0;
	isEnded: boolean = false;
	overlayWords: string[] = [];
	isKeyboard: boolean = Boolean(localStorage.getItem('keys'));
	isTrainingMode: boolean = localStorage.getItem('mode') === 'train';
	selectedSymbols: string[] = [];

	setWordsData = (newData: words) => {
		this.wordsData = newData;
	};

	setIsLoaded = (isLoaded: boolean) => {
		this.isLoaded = isLoaded;
	};

	setInitialSeconds = (seconds: number) => {
		this.initialSeconds = seconds;
	};

	setSeconds = (seconds: number) => {
		this.seconds = seconds;
	};

	setRightWords = (rightWords: number) => {
		this.rightWords = rightWords;
	};

	setIsStarted = (isStarted: boolean) => {
		this.isStarted = isStarted;
	};

	setAccuracy = (accuracy: number) => {
		this.accuracy = accuracy;
	};

	setRecord = (record: number) => {
		this.record = record;
	};

	setIsEnded = (isEnded: boolean) => {
		this.isEnded = isEnded;
	};

	setOverlayWords = (overlayWords: string[]) => {
		this.overlayWords = overlayWords;
	};

	toggleIsKeyboard = () => {
		this.isKeyboard = !this.isKeyboard;
		localStorage.setItem('keys', this.isKeyboard ? 'keys' : '');
	};

	toggleIsTrainingMode = () => {
		this.isTrainingMode = !this.isTrainingMode;
		localStorage.setItem('mode', this.isTrainingMode ? 'train' : 'chill');
	};

	setSelectedSymbols = (selectedSymbols: string[]) => {
		this.selectedSymbols = selectedSymbols;
	};

	constructor() {
		makeAutoObservable(this);
	}
}

export default new Store();
