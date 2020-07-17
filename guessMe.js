/*let wordBank = [
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

let usedWords;
if (localStorage.getItem('guessMeStorage') === null) {
    usedWords = [];
} else {
    usedWords = JSON.parse(localStorage.getItem('guessMeStorage'));
}

usedWords.push(wordBank[wordIndex]);

localStorage.setItem('guessMeStorage', JSON.stringify(usedWords));*/

export function user(hammer) {
    return `hello, ${hammer}`;
}
