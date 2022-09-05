/** Command-line tool to generate Markov text. */
const fs = require('fs');
const { MarkovMachine } = require('./markov');
const axios = require('axios');
const process = require('process');

function generateText(text) {
	let mm = new MarkovMachine(text);
	console.log(mm.makeText());
}

function makeText(path) {
	fs.readFile(path, 'utf8', function callback(err, data) {
		if (err) {
			console.error(`Error reading: ${path}`, err);
			process.exit(1);
		}
		else {
			generateText(data);
		}
	});
}

async function makeTextFromURL(url) {
	let res;

	try {
		res = await axios.get(url);
	} catch (err) {
		console.error(`Cannot read ${url}`, err);
		process.exit(1);
	}
	generateText(res.data);
}

let [ method, path ] = process.argv.slice(2);

if (method === 'file') {
	makeText(path);
}
else if (method === 'url') {
	makeTextFromURL(path);
}
else {
	console.error(`Unknown command: ${method}`);
	process.exit(1);
}
