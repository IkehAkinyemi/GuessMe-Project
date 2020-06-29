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
let usedWords = [],
    toBeShuffled,
    letterRange = 7,
    correctly = 0,
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
}

let update = function() {
    toBeShuffled = randomSelect().toUpperCase();
    return toBeShuffled;
}

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
    return shuffled.toUpperCase();
}

let showMe = update();
alert(showMe);
alert(shuffler());
userInput = prompt('Type Here');

let resultCheck = function() {
    if(showMe == userInput.toUpperCase()) {
        alert("Correct");
        correctly++;
        if(correctly == 5) letterRange = letterRange + 4;
        showMe = update();
        if(showMe == 'OUT OF WORDS') return alert("Successfully finished the level");
        alert(showMe);
        alert(shuffler());
        userInput = prompt('Try this one now');
        resultCheck();
    } else {
        alert("Wrongly guessed");
        userInput = prompt('Type again');
        resultCheck();
    }
}

resultCheck();