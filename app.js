var randNum;
const inspirationalMess = [
    "When you have a dream, you’ve got to grab it and never let go.",
    "Nothing is impossible. The word itself says ‘I’m possible!'",
    "There is nothing impossible to they who will try.",
    "The bad news is time flies. The good news is you’re the pilot.",
    "Life has got all those twists and turns. You’ve got to hold on tight and off you go."
]

const currentMood = [
    "When you are sad",
    "When you feel demotivated",
    "When you feel angry"
]

const badWords = [
    "fuck",
    "damn",
    "shit",
    "bullshit"
]

var finalMessage;
const printMess = () => {
    var rand1 = Math.floor(Math.random() * inspirationalMess.length);
    var rand2 = Math.floor(Math.random() * currentMood.length);
    var rand3 = Math.floor(Math.random() * badWords.length);

    finalMessage = inspirationalMess[rand1] + "!" + currentMood[rand2] + "!" + badWords[rand3];
    return finalMessage;
}

console.log(printMess());

