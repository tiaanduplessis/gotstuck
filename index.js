const open = require('open');

module.exports = async function (searchString = '') {
	const encoded = encodeURIComponent(searchString);
	await Promise.all([
    open(`https://duckduckgo.com/?q=${encoded}`),
    open(`https://stackoverflow.com/search?q=${encoded}`),
    open(`https://github.com/search?q=${encoded}&type=Issues`),
	]);
};
