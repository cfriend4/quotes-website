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

//Function to greet the user when they input their name
function greetUser(){
    let name = document.getElementById('nameInput').value;
    let lang = document.getElementById('langInput').value;
    if(name === ''){
        var greetingMessage = "Please input a value."
    } else if(lang === 'cat'){
        var greetingMessage = difLanguage(lang) + "!";
    } else {
        let helloMessage = difLanguage(lang);
        var greetingMessage = helloMessage + ' ' + name + "!";
        
    }
    document.getElementById('greetingText').textContent = greetingMessage;
}

//console.log(difLanguage());

//Function to return Hello in a user-specified language
function difLanguage(lang){
    let hello;
    
    switch(lang) {
        case 'eng':
            hello = 'Hello';
            break;
        case 'es':
            hello = 'Hola';
            break;
        case 'fr':
            hello = 'Bonjour';
            break;
        case 'sw':
            hello = 'Jambo';
            break;
        case 'ir':
            hello = 'Dia dhuit';
            break;
        case 'cat':
            hello = 'Meow';
            break;
        case 'rand':
            hello = difLanguage(randLang());
            break;

    }
    return hello;


}
//Function to return a random language value
function randLang(){
    let languages = ['eng', 'es', 'fr', 'sw', 'ir', 'cat'];
    return languages[Math.floor(Math.random()* languages.length)];
}

console.log(randLang());

//Lists for quotes/jokes
//Motivational Quotes
const motivationalQuotes = [
    "Once you know the way broadly you will see it in all things. - Miyamoto Musashi",
    "Everything is within. Seek nothing outside of yoursadelf. - Miyamoto Musashi",
    "Waste no more time arguing what a good man should be. Be One. - Marcus Aurelius",
    "External things are not the problem. It's your assessment of them. Which you could erase right now. - Marcus Aurelius",
    "How does it help... to make troubles heavier by bemoaning them? - Seneca"
];
//Jokes
const jokes = [
    "How do you get a one-armed man out of a tree? Wave.",
    "During my prostate exam I asked the Doctor, 'Where should I put my pants?' 'Over by mine' was not the answer I expected."
];
//Ego-check depressing quotes
const egoChecks = [
    "All alone! Whether you like it or not, alone is something you'll be quote a lot! - Dr. Sesus",
    "Death comes to us all; we can only choose how to face it when it comes. -Robert Jordan",
    "Don't go around saying the world owes you a living. The world owes you nothing. It was here first. - Mark Twain",
    "Of all the words of mice and men, the saddest are 'it might have been' - Kurt Vonnegut"
];
//Yo mamma jokes and roasts
const roasts = [
    "Yo mamma's so fat her blood type is Ragu.",
    "I look at you and think 'Two billion years of evolution for this'.",
    "You're the reason this country has to put directions on shampoo bottles.",
    "Sorry, I can't think of an insult dumb enough for you to understand."
];

//Function Calls
addClickListener('motivational-button', 'displayText', motivationalQuotes);
addClickListener('joke-button', 'displayText', jokes);
addClickListener('ego-button', 'displayText', egoChecks);
addClickListener('roast-button', 'displayText', roasts);