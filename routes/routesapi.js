const path = require("path");

let tables = require('../data/tables.js');
let waitList = require('../data/waitList.js');

module.exports = function (app) {
	app.get('/api/tables', function (req, res) {

		res.json([tables, waitList]);
	});

	app.post('/api/tables', function (req, res) {
		if (tableData.length < 5) {
			tables.push(req.body);
			res.json(true);
		}


		else {
			waitList.push(req.body);
			res.json(false);
		}
	});

}