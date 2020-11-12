var quotes = [
    'Letting a new day begin, Hold to the time that you know',
    'I am the Lord of loneliness I\'ll hold my breath Just spoke with death He said he hopes for the best',
    'Close your eyes, to see what it really means Effortless hands to hold on to peace',
    'Deleted whenever I feel defeated',
    'Feeling like a gash that keeps bleeding (keeps bleeding) But even a cut will glisten when the incision is healing',
    'Don\'t even know why I rap I know yall don\'t get the meaning',
    'Even though I\'m broke I know you see me shining like you starin at the sun',
    'Let the world blow up first, then I might just close my eyes It\'s all I really wanted my whole life',
    'Not sure what space I\'m in Oh well',
    'Rain rushing Window pane Oh well',
    'Yall keep flossing Money tossing Level crossing I will plot the apocalypse',
    'I just hope they prayin\' for me lately, cause I need that',
    'Truly independent sold my soul to the game', 
    'Maybe I\'m just trippin but the truth is I\'m in pain',
    'This what keep me sane when I\'m down who gon\' pick me up?',
    'Barrel full of gasoline but still they try matchin\' me', 
    'Come and talk with me and walk with me and dance with me under the moonlight If you believe two souls can turn to one',
    'It\'s you it\'s not true, worth of my woes',
    'I\'m wired with desire, throw the water in the fire',
    'Devil in my soul mind runnin around'
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}