const { MarkovMachine } = require('./markov');

let mm;
describe('Markov Tests', () => {
	beforeEach(() => {
		mm = new MarkovMachine('I am a cat but I am no hat');
	});
	test('new mm is an array', () => {
		expect(mm).toBeInstanceOf(MarkovMachine);
	});
	test('new mm is truthy', () => {
		expect(mm).toBeTruthy();
	});
});
