const express = require('express');
const fs = require('fs');
const fs_write = require('util').promisify(fs.writeFile);
const app = express();

(function () {
	console.log('Write is starting');
	fs_write('/tmp/message.txt', 'Testing Mounts')
		.then(result => {
			console.log(result);
			console.log('Written to file');
		})
		.catch(err => {
			console.log(err);
		});
})();
