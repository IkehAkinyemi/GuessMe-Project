let levelSelector = document.querySelector('.level-display'),
guessedSelector = document.querySelector('.guessed-display'),
helpButton = document.querySelector('.help'),
helpSelector = document.querySelector('.help-display'),
shuffleSelector = document.querySelector('.shuffle-display'),
shuffleButton = document.querySelector('.shuffle'),
paragraph = document.querySelector('p'),
resultSelector = document.querySelector('.result-display'),
inputField = document.getElementById('userInput'),
checkButton = document.querySelector('.check');

let wordBank = [
    'loyal', 'selection', 'Know', 'bread', 'Please', 'mural', 'abnegation', 'marsh', 'brief', 'fatal',
    'loose', 'aggrandize', 'frail', 'Desert', 'ambivalent', 'limit', 'Aesthetics', 'starve', 'revive',
    'ordeal', 'wisdom', 'wander', 'symbol', 'arctic', 'grasp', 'imitate', 'gradual', 'reverse',
    'scatter', 'lobster', 'ethnics', 'loathe', 'syntax', 'launch', 'survey', 'defend', 'custom', 'coward',
    'attire', 'border', 'enable', 'absorb', 'arrange', 'ancient', 'flutter', 'crumple', 'diagram', 'disease',
    'triumph', 'perform', 'passage', 'nursery', 'predator', 'consider', 'convince', 'moisture',
    'opposite', 'graphics', 'struggle', 'delicate', 'explorer', 'definite', 'economy', 'immense', 'astound', 'abolish',
    'suspend', 'synonym', 'visible', 'pasture', 'deprive', 'decline', 'monarch', 'guardian', 'apparent',
    'reassure', 'reliable', 'resemble', 'withdraw', 'occasion', 'pressure', 'purchase', 'escalate', 'navigate', 'numerous',
    'fortunate', 'opponents', 'knowledge', 'persecute', 'objective', 'originate', 'degenerate', 'terminate', 'transform', 'unanimous',
    'rough', 'scold', 'timid', 'whirl', 'croak', 'dart', 'dodge', 'creak', 'knob', 'cozy',
    'patronize', 'overwhelm', 'permanent', 'exuberant', 'anonymous', 'supervise', 'magnitude', 'notorious', 'dumbfound', 'dependent',
    'illiterate', 'legitimate', 'compromise', 'melancholy', 'vindictive', 'despondent', 'dishearten', 'noteworthy', 'annihilate', 'phenomenon',
    'imperative', 'inaugurate', 'proficient', 'millennium', 'atmosphere'
];

let dictionary = {
    "ATMOSPHERE": "(Astronomy) the gaseous envelope surrounding a heavenly body.",
    "MILLENNIUM": "A period of general righteousness and happiness, especially in the indefinite future.",
    "PROFICIENT": "expert",
    "INAUGURATE": "initiate",
    "IMPERATIVE": "Absolutely necessary or required; unavoidable.",
    "PHENOMENON": "A fact, occurrence, or circumstance observed or observable.",
    "ANNIHILATE": "nullify",
    "NOTEWORTHY": "remarkable",
    "DISHEARTEN": "To depress the hope, courage, or spirits of; discourage.",
    "DESPONDENT": "Feeling or showing profound hopelessness.",
    "VINDICTIVE": "Disposed or inclined to revenge.",
    "MELANCHOLY": "A gloomy state of mind, especially when habitual or prolonged.",
    "COMPROMISE": "A settlement of differences by mutual concessions; an agreement reached by adjustment of conflicting or opposing claims, principles, etc., by reciprocal modification of demands.",
    "LEGITIMATE": "lawful",
    "ILLITERATE": "Displaying a marked lack of knowledge in a particular field.",
    "DEPENDENT": "Convenient or beneficial, usually as a result of dishonesty or connivance.",
    "DUMBFOUND": "To make speechless with amazement; astonish.",
    "NOTORIOUS": "Publicly or generally known, as for a particular trait.",
    "MAGNITUDE": "Great importance or consequence.",
    "SUPERVISE": "To oversee (a process, work, workers, etc.) during execution or performance; superintend; have the oversight and direction of.",
    "ANONYMOUS": "Without any name acknowledged, as that of author, contributor, or the like.",
    "EXUBERANT": "Abounding in vitality; extremely joyful and vigorous.",
    "PERMANENT": "Intended to exist or function for a long, indefinite period without regard to unforeseeable conditions.",
    "OVERWHELM": "To cover or bury beneath a mass of something.",
    "PATRONIZE": "To behave in an offensively condescending manner toward.",
    "COZY": "Convenient or beneficial, usually as a result of dishonesty or connivance.",
    "KNOB": "A rounded lump or protuberance on the surface or at the end of something, as a knot on a tree trunk.",
    "CREAK": "To make a sharp, harsh, grating, or squeaking sound.",
    "DODGE": "To move aside or change position suddenly, as to avoid a blow or get behind something.",
    "DART": "Something similar in function to such a missile, as the stinging member of an insect.",
    "CROAK": "To speak with a low, rasping voice.",
    "WHIRL": "To turn around, spin, or rotate rapidly.",
    "TIMID": "Characterized by or indicating fear.",
    "SCOLD": "To find fault; reprove.",
    "ROUGH": "Having a coarse or uneven surface, as from projections, irregularities, or breaks; not smooth.",
    "LAUNCH": "To send forth, catapult, or release, as a self-propelled vehicle or weapon.",
    "MURAL": "A greatly enlarged photograph attached directly to a wall.",
    "UNANIMOUS": "Characterized by or showing complete agreement.",
    "TRANSFORM": "To change in form, appearance, or structure; metamorphose.",
    "TERMINATE": "To occur at or form the conclusion of.",
    "DEGENERATE": "To fall below a normal or desirable level in physical, mental, or moral qualities; deteriorate.",
    "ORIGINATE": "(of a train, bus, or other public conveyance) to begin a scheduled run at a specified place.",
    "OBJECTIVE": "Not influenced by personal feelings, interpretations, or prejudice; based on facts; unbiased.",
    "PERSECUTE": "To pursue with harassing or oppressive treatment, especially because of religious or political beliefs, ethnic or racial origin, gender identity, or sexual orientation.",
    "KNOWLEDGE": "Acquaintance with facts, truths, or principles, as from study or investigation; general erudition.",
    "OPPONENTS": "Adversaries",
    "FORTUNATE": "Lucky",
    "NUMEROUS": "Very many; being or existing in great quantity.",
    "NAVIGATE": "To ascertain or plot and control the course or position of (a ship, aircraft, etc.)",
    "ESCALATE": "To increase in intensity, magnitude, etc.",
    "PURCHASE": "To acquire by the payment of money or its equivalent.",
    "PRESSURE": "The exertion of force upon a surface by an object, fluid, etc., in contact with it.",
    "OCCASION": "A particular time, especially as marked by certain circumstances or occurrences.",
    "WITHDRAW": "To retract or recall.",
    "RESEMBLE": "To be like or similar to.",
    "RELIABLE": "That may be relied on or trusted; dependable in achievement, accuracy, honesty, etc.",
    "REASSURE": "To restore to assurance or confidence.",
    "APPARENT": "Capable of being easily perceived or understood; plain or clear; obvious.",
    "GUARDIAN": "A person who guards, protects, or preserves.",
    "MONARCH": "A person or thing that holds a dominant position.",
    "DECLINE": "To express inability or reluctance to accept; refuse with courtesy.",
    "DEPRIVE": "To remove or withhold something from the enjoyment or possession of (a person or persons).",
    "PASTURE": " An area covered with grass or other plants used or suitable for the grazing of livestock; grassland.",
    "VISIBLE": "That can be seen; perceptible to the eye.",
    'SYNONYM': "A word having the same or nearly the same meaning as another in the language.",
    "SUSPEND": "To hang by attachment to something above.",
    "ABOLISH": "To do away with; put an end to; annul; make void.",
    "ASTOUND": "To overwhelm with amazement; astonish greatly; shock with wonder or surprise.",
    "IMMENSE": "immeasurable; boundless.",
    "ECONOMY": "The management of the resources of a community, country, etc., especially with a view to its productivity.",
    "DEFINITE": "Clearly defined or determined; not vague or general; fixed; precise; exact.",
    "EXPLORER": "A person who investigates unknown regions.",
    "DELICATE": "Fragile; easily damaged; frail.",
    "STRUGGLE": "To contend resolutely with a task, problem, etc.",
    "GRAPHICS": "Visual representation pertaining to pictorial information displayed, plotted, or printed by a computer.",
    "OPPOSITE": "Contrary or radically different in some respect common to both, as in nature, qualities, direction, result, or significance.",
    "MOISTURE": "Containing a small quantity of liquid, especially water.",
    "CONVINCE": "To move by argument or evidence to belief, agreement, consent, or a course of action.",
    "CONSIDER": "To think carefully about, especially in order to make a decision; contemplate; reflect on.",
    "PREDATOR": "Any organism that exists by preying upon other organisms.",
    "NURSERY": "A place where young trees or other plants are raised for transplanting, for sale, or for experimental study.",
    "PASSAGE": "A portion or section of a written work; a paragraph, verse, etc.",
    "PERFORM": "To carry out; execute; do.",
    "DISEASE": "Any abnormal condition in a plant or animal that interferes with its vital physiological processes, caused by pathogenic microorganisms, parasites, unfavorable environmental, genetic, or nutritional factors, etc.",
    "TRIUMPH": "A significant success or noteworthy achievement; instance or occasion of victory.",
    "FLUTTER": "To flap the wings rapidly; fly with flapping movements.",
    "CRUMPLE": "To press or crush into irregular folds or into a compact mass; bend out of shape; rumple; wrinkle.",
    "DIAGRAM": "A figure, usually consisting of a line drawing, made to accompany and illustrate a geometrical theorem, mathematical demonstration, etc.",
    "ANCIENT": "Dating from a remote period; of great age.",
    "ARRANGE": "To place in proper, desired, or convenient order; adjust properly.",
    "ABSORB": "To suck up or drink in (a liquid); soak up.",
    "ATTIRE": "To dress, array, or adorn, especially for special occasions, ceremonials, etc.",
    "BORDER": "The line that separates one country, state, province, etc., from another; frontier line.",
    "ENABLE": "To make able; give power, means, competence, or ability to; authorize.",
    "COWARD": "Lacking courage; very fearful or timid.",
    "CUSTOM": "A habitual practice; the usual way of acting in given circumstances.",
    "DEFEND": "To ward off attack from; guard against assault or injury (usually followed by from or against).",
    "SYNTAX": "The study of the patterns of formation of sentences and phrases from words.",
    "SURVEY": "To view in detail, especially to inspect, examine, or appraise formally or officially in order to ascertain condition, value, etc.",
    "SELECTION": "The action of carefully choosing someone or something as being the best or thr most suitable.",
    "MARSH": "A tract of low wet land, often treeless and periodically inundated, generally characterized by a growth of grasses, sedges, cattails, and rushes.",
    "AMBIVALENT": "Having mixed feelings about something or someone.",
    "LOATHE": "To feel disgust or intense aversion for; abhor.",
    "LIMIT": "The final, utmost, or furthest boundary or point as to extent, amount, continuance, procedure, etc.",
    "AGGRANDIZE": "Enhance the reputation of (someone) beyond what is justified by the facts.",
    "FATAL": "Causing or capable of causing death; mortal; deadly.",
    "ARCTIC": "Characteristics of, relating to, or located at or near the North Pole.",
    "WANDER": "To ramble without a definite purpose or objective; roam, rove, or stray.",
    "STARVE": "To die or perish from lack of food or nourishment.",
    "IMITATE": "To follow or endeavor to follow as a model or example.",
    "WISDOM": "The quality or state of being wise; knowledge of what is true or right coupled with just judgment as to action; sagacity, discernment, or insight.",
    "BRIEF": "Lasting or taking a short time; of short duration.",
    "SYMBOL": "Something used for or regarded as representing something else; a material object representing something, often something immaterial; emblem, token, or sign.",
    "GRADUAL": "Taking place, changing, moving, etc., by small degrees or little by little.",
    "LOOSE": "Not firmly or tightly fixed in place, detached or able to be detached.",
    "REVERSE": "Opposite or contrary in position, direction, order, or character.",
    "DESERT": "Abandon (a person, a cause, or organization) in a way considered disloyal ur treacherous.",
    "GRASP": "To seize and hold by or as if by clasping with the fingers or arms.",
    "ABNEGATION": "The action of renouncing or rejecting something.",
    "ORDEAL": "A primitive form of trial to determine guilt or innocence by subjecting the accused person to fire, poison, or other serious danger, the result being regarded as a divine or preternatural judgment.",
    "FRAIL": "Having delicate health; not robust; weak.",
    "ETHNICS": "Pertaining to or characteristic of a people, especially a group (ethnic group) sharing a common and distinctive culture, religion, language, or the like.",
    "SCATTER": "To separate and drive off in various directions; disperse.",
    "REVIVE": "To activate, set in motion, or take up again; renew.",
    "PLEASE": "Cause to feel happy and satisfied.",
    "BREAD": "Food made of flour, water, and yeast mixed together and baked.",
    "AESTHETICS": "Set of principles of concerned with the nature and appreciation of beauty.",
    "LOBSTER": "Any of various large, edible, marine, usually dull-green, stalk-eyed decapod crustaceans of the family Homaridae, especially of the genus Homarus, having large, asymmetrical pincers on the first pair of legs, one used for crushing and the other for cutting and tearing: the shell turns bright red when cooked.",
    "KNOW": "Be aware  of through obsservation, inquiry, or information.",
    "LOYAL": "Faithful to any leader, party, or cause, or to any person or thing conceived as deserving fidelity."
};

let usedWords = [],
    toBeShuffled,
    letterRange = 6,
    showMe;

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
    if(inputField.value.toUpperCase() == toBeShuffled) {
        setTimeout(() => {
            resultSelector.style.color = '#00FF00';
            resultSelector.innerText = 'Correct!';
        }, 10);
        setTimeout(() => {
            resultSelector.innerText = '';
        }, 1000);
        guessedSelector.innerText++;
        if(guessedSelector.innerText % 10 == 0) {
            letterRange = letterRange + 1;
            levelSelector.innerText++;
            helpSelector.innerText = Number(helpSelector.innerText) + 2;
        }
        showMe = update();
        paragraph.innerText = dictionaryHelp();
        if(showMe == 'OUT OF WORDS') return alert("Successfully finished the level");
        //alert(showMe);
        shuffler();
        inputField.value = '';
    } else {
        setTimeout(() => {
            resultSelector.style.color = 'red';
            resultSelector.innerText = "Wrongly guessed";
        }, 10);
        setTimeout(() => {
            resultSelector.innerText = "";
        }, 1000);
        inputField.value = '';
    }
};

inputField.addEventListener('input', function() {
    inputField.value = inputField.value.toUpperCase();
});

shuffleButton.addEventListener('click', function() {
    setTimeout(() => {
        shuffleButton.style.background = "#E98020";
    }, 10);
    setTimeout(() => {
        shuffleButton.style.background = "transparent";
    }, 100);
});

checkButton.addEventListener('click', function() {
    setTimeout(() => {
        checkButton.style.background = "#c76a13";
    }, 10);
    setTimeout(() => {
        checkButton.style.background = "#E98020";
    }, 100);
});

helpButton.addEventListener('click', function() {
    if (helpSelector.innerText === "0") {
        setTimeout(() => {
            resultSelector.style.color = '#FFCC00';
            resultSelector.innerText = 'oops, out of help!';
        }, 10);
        setTimeout(() => {
            resultSelector.innerText = '';
        }, 1000);
    } else {
        inputField.value = showMe;
    helpSelector.innerText--;
    }
});

showMe = update();
shuffleButton.addEventListener('click', shuffler);
checkButton.addEventListener('click', resultCheck);
paragraph.innerText = dictionaryHelp();
shuffler();