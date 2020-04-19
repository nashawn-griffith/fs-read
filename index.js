const express = require('express');
const fs = require('fs');
const fs_write = require('util').promisify(fs.writeFile);
const app = express();

(function () {
	console.log('Reading is starting');
	while (true) {
		// fs_read('/tmp/message.txt')
		// 	.then(data => {
		// 		console.log('Data read: ', data.toString());
		// 		console.log('\n \n');
		// 	})
		// 	.catch(err => {
		// 		console.log('Error reading file');
		// 		console.log(err);
		// 		console.log('\n \n');
		// 	});

		fs_write('/tmp/message.txt', 'Testing Mounts')
			.then(result => {
				console.log('Written to file');
				return res.status(200).send('File Updated');
			})
			.catch(err => {
				console.log(err);
				return res.status(400).send(err);
			});
	}
})();

// app.get('/monitor', (req, res) => {
// 	return res.status(200).send('Ok');
// });

// app.get('/read', (req, res) => {
// 	fs_read('/tmp/message.txt')
// 		.then(data => {
// 			console.log('Data: ', data.toString());
// 			return res.status(200).send('Data read from file');
// 		})
// 		.catch(err => {
// 			console.log('Error reading file');
// 			return res.status(400).send(err);
// 		});
// });

// app.listen(5001, () => {
// 	console.log('read server running on port 5000');
// });
