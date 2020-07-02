
const readline = require('readline-sync')


function start() {
	const content = {}
	
	content.searchTerm = askAndReturnSearch() 
	content.prefix = askAndReturnPrefix()

	function  askAndReturnSearch() {
		return readline.question('Type a Wiki search term: ')
	}

	function  askAndReturnPrefix() {
		const prefixes = ['Who is','What is', 'The history of']
		const selectedPrefixesIndex = readline.keyInSelect(prefixes, 'Choose:')
		const selectedPrefixesText = prefixes[selectedPrefixesIndex]
	
		return selectedPrefixesText
	}

	console.log(content)
}

start()
 
