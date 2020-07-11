let levelSelector = document.querySelector('.level-display'),
guessedSelector = document.querySelector('.guessed-display'),
helpSelector = document.querySelector('.help-display'),
shuffleSelector = document.querySelector('.shuffle-display'),
shuffleButton = document.querySelector('.shuffle'),
paragraph = document.querySelector('p'),
inputField = document.querySelector('input'),
checkButton = document.querySelector('.check');

let wordBank = [
    'selection',
    'Know',
    'bread',
    'Please',
    'abnegation',
    'loose',
    'aggrandize',
    'Desert',
    'ambivalent',
    'Aesthetics'
];

let dictionary = {
    "SELECTION": "The action of carefully choosing someone or something as being the best or thr most suitable.",
    "AMBIVALENT": "Having mixed feelings about something or someone.",
    "AGGRANDIZE": "Enhance the reputation of (someone) beyond what is justified by the facts.",
    "LOOSE": "Not firmly or tightly fixed in place, detached or able to be detached.",
    "DESERT": "Abandon (a person, a cause, or organization) in a way considered disloyal ur treacherous.",
    "ABNEGATION": "The action of renouncing or rejecting something.",
    "PLEASE": "Cause to feel happy and satisfied.",
    "BREAD": "Food made of flour, water, and yeast mixed together and baked.",
    "AESTHETICS": "Set of principles of concerned with the nature and appreciation of beauty.",
    "KNOW": "Be aware  of through obsservation, inquiry, or information."
};

let usedWords = [],
    toBeShuffled,
    letterRange = 7,
    showMe,
    userInput;

function randomSelect() {
    let wordIndex = (function() {
        return Math.floor(Math.random() * wordBank.length)
    })();
    let repeatedWords = usedWords.every( n => n != wordBank[wordIndex]);
    if(repeatedWords && letterRange > wordBank[wordIndex].length) {
        usedWords.push(wordBank[wordIndex]);
        return wordBank[wordIndex];
    } else {
        return !(usedWords.length == wordBank.length) ? randomSelect() : 'OUT OF WORDS';
    }
};


let update = function() {
    toBeShuffled = randomSelect().toUpperCase();
    return toBeShuffled;
};

let shuffler = function() {
    let shuffled = '', shuffleIndex = [], repeatCheck;
    for(i = 0; i < toBeShuffled.length; i++) {
        let randomSelectIndex = (function() {
            return Math.floor(Math.random() * toBeShuffled.length);
        })();
        repeatCheck = shuffleIndex.every(n => n != randomSelectIndex);
        if (repeatCheck) {
            shuffled += toBeShuffled[randomSelectIndex];
            shuffleIndex.push(randomSelectIndex)
        } else {
            !(shuffleIndex.length == toBeShuffled.length) ? i-- : "DONE SHUFFLING";  
        }
    }
    shuffleSelector.textContent = shuffled.toUpperCase();
    return shuffled.toUpperCase();
}

let dictionaryHelp = function() {
    for (x in dictionary) {
        if (x == showMe) return dictionary[x];
    }
}

let resultCheck = function() {
    if (inputField.innerText === showMe) {
        alert('Correctly Guessed');
    };
}
shuffleButton.addEventListener('click', shuffler);
showMe = update();
paragraph.innerText = dictionaryHelp();
userInput = inputField.innerText;
inputField.addEventListener('click', resultCheck);
console.log(inputField.innerText)
console.log(showMe);
console.log(shuffler());