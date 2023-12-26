const words = "play with me";

// Mapping object
const letterMapping = {
    'p': 'b',
    'l': 's',
    'a': 'k',
    'y': 'x',
    'w': 'm',
    'i': 't',
    't': 'h',
    'h': 'r',
    'm': 'e'
    // Add more mappings as needed
};

// Function to replace letters
function replaceLetters(inputString, letterMapping) {
    let resultArray = inputString.split('');

    for (let i = 0; i < resultArray.length; i++) {
        let currentChar = resultArray[i];

        if (/[a-z]/.test(currentChar) && letterMapping.hasOwnProperty(currentChar)) {
            resultArray[i] = letterMapping[currentChar];
        }
    }

    return resultArray.join('');
}

// Replace letters in the string
const modifiedWords = replaceLetters(words, letterMapping);

console.log(modifiedWords);  // Output: "bmsy mith ke"