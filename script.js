//Function that handles the display of text when one of our HTML buttons is clicked
function addClickListener(buttonId, displayId, texts){
    document.getElementById(buttonId).addEventListener('click', function() {
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        document.getElementById(displayId).textContent = randomText;

        displayElement.classList.add('fadeIn');

        setTimeout(function() {
            displayElement.classList.remove('fadeIn');
        }, 2000);
        
    });
}

//Lists for quotes/jokes
//Motivational Quotes
const motivationalQuotes = [
    "Once you know the way broadly you will see it in all things. - Miyamoto Musashi",
    "Everything is within. Seek nothing outside of yourself. - Miyamoto Musashi",
    "Waste no more time arguing what a good man should be. Be One. - Marcus Aurelius",
    "External things are not the problem. It's your assessment of them. Which you could erase right now. - Marcus Aurelius",
    "How does it help... to make troubles heavier by bemoaning them? - Seneca"
];
//Jokes
const jokes = [
    "I saw my doctor the other day and he told me I had to stop mastrubating. I asked him why, and he said 'Because I'm trying to examine you.'",
    "How do you get a one-armed man out of a tree? Wave.",
    "The prositute put on her clothes and said 'It was a business doing pleasure with you.'",
    "During my prostate exam I asked the Doctor, 'Where should I put my pants?' 'Over by mine' was not the answer I expected."
];
//Ego-check depressing quotes
const egoChecks = [
    "All alone! Whether you like it or not, alone is something you'll be quote a lot! - Dr. Sesus",
    "Death comes to us all; we can only choose how to face it when it comes. -Robert Jordan",
    "Don't go around saying the world owes you a living. The world owes you nothing. It was here first. - Mark Twain",
    "Of all the words of mice and men, the saddest are 'it might have been' - Kurt Vonnegut"
];

//Function Calls
addClickListener('motivational-button', 'displayText', motivationalQuotes);
addClickListener('joke-button', 'displayText', jokes);
addClickListener('ego-button', 'displayText', egoChecks)