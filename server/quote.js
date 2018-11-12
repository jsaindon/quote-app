const {quotes} = require('./json/quotes.json');
const _ = require('lodash');

module.exports = {
	getQuote: function() {
		return _.sample(quotes);
	},
};