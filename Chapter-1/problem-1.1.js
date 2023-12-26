const ciphertext = "lrvmnir bpr sumvbwvr jxbpr lmiwv yjeryrkbi jxqmbm wi bpr xjvni mkd ymibrut jx irhx wibpr riirkvr jx ymbinlmtmipw utnqmumbr djw ipmhh butbj rhnvwdmbr bpr yjeryrkbi jx bprqmbm mvvjudwko bj ytwkbrusurbmbwjk lmird jkxjubt trmui jx ibndt wbwi kjb mkrmit bmiq bjrashmwk rmvp yjeryrkb mkd wbi iwokwxwvmkvr mkdijyr ynib urymwk nkrashmwkrd bjower m vjyshrbr rashmkmbwjk jkr cjnhd pmer bjlr fnmhwxwrd mkd wkiswurd bj invpmk rabrkb bpmb pr vjnhd urmvp bpribmbr jx rkhwopbrkrd ywkd vmsmlhr jx urvjokwgwko ijnkdhrii ijnkd mkdipmsrhrii ipmsr wdj kjb drry ytirhx bprxwkmh mnbpjuwbt lnb ytrasruwrkvr cwbp qmbm pmi hrxb kjdjnlb bpmb bpr xjhhjcwko wibpr sujsru msshwvmbwjk mkd wkbrusurbmbwjk wjxxru ytbprjuwri wkbpr pjsr bpmb bpr riirkvr jxjqwkmcmk qmumbr cwhh urymwk wkbmvb";
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const englishLettersFrequency = [
    [0.127, 'e'],
    [0.0906, 't'],
    [0.0817, 'a'],
    [0.0751, 'o'],
    [0.0697, 'i'],
    [0.0675, 'n'],
    [0.0633, 's'],
    [0.0609, 'h'],
    [0.0599, 'r'],
    [0.0425, 'd'],
    [0.0403, 'l'],
    [0.0278, 'c'],
    [0.0276, 'u'],
    [0.0241, 'm'],
    [0.0236, 'w'],
    [0.0223, 'f'],
    [0.0202, 'g'],
    [0.0197, 'y'],
    [0.0193, 'p'],
    [0.015, 'b'],
    [0.0098, 'v'],
    [0.0077, 'k'],
    [0.0015, 'j'],
    [0.0015, 'x'],
    [0.001, 'q'],
    [0.0007, 'z']
  ];
  
 
function encryptText(str) {
    let frequencyResult = [];
    let matchedLetters = {};
    frequencyResult = countLetters(str);
    console.log(frequencyResult);
    for (let i = 0; i < 26; i++) {
        matchedLetters[frequencyResult[i][1]] = englishLettersFrequency[i][1];
    }
    // Those additional changes are done by manually guessing the missing letters once the text is more clear within 
    // first decryption by applying letter frequency method.
    matchedLetters["j"] = "o";
    matchedLetters["k"] = "n";
    matchedLetters["l"] = "b";
    matchedLetters["n"] = "u";
    matchedLetters["c"] = "w";
    matchedLetters["e"] = "v";
    matchedLetters["x"] = "f";
    matchedLetters["w"] = "i";
    matchedLetters["s"] = "p";
    matchedLetters["a"] = "x";
    matchedLetters["f"] = "q";
    matchedLetters["o"] = "g";
    matchedLetters["p"] = "h";
    matchedLetters["g"] = "z";
    matchedLetters["t"] = "y";
    matchedLetters["q"] = "k";
    console.log(matchedLetters);
    console.log(ciphertext);
    console.log('........')
    console.log(replaceLetters(str, matchedLetters));
}


function countOccurrencesOfcharacterinString(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}


function countLetters(str) {
    let frequencyResult = [];
    for (let i = 0; i < alphabet.length; i++) {
        let result = [];
        result[0] = countOccurrencesOfcharacterinString(str, alphabet[i]);
        result[1] = alphabet[i];

        frequencyResult.push(result);
    }

    frequencyResult.sort((a, b) => b[0] - a[0]);
    return frequencyResult;
}

// Function to replace letters
function replaceLetters(text, letterMapping) {
    let resultArray = text.split('');

    for (let i = 0; i < resultArray.length; i++) {
        let currentChar = resultArray[i];

        if (/[a-z]/.test(currentChar) && letterMapping.hasOwnProperty(currentChar)) {
            resultArray[i] = letterMapping[currentChar];
        }
    }

    return resultArray.join('');
}

encryptText(ciphertext);