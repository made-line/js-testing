const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = function(text) {
	const letterCount = {};
	
	letters = text.split('');
	letters.forEach((letter) => {
		// if letter is in there, add 1
		if (letterCount[letter]) {
			letterCount[letter] += 1;
		// if letter is not in there, put it in
		}	else {
			letterCount[letter] = 1;
		}
});


for (const letter of ALPHABET) {
	if (!letterCount[letter]) {
		return false;
	}
}
	return true;
};


module.exports = isPangram;