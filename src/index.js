const express = require('express');

const app = express();
const port = 3001;

app.get('/', (_, res) => {
	res.send('Hello world');
});

app.listen(port, () => {
	console.log('up and running');
});
