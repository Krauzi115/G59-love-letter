var quotes = [
    'Letting a new day begin Letting a new day begin Hold to the time that you know',
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
    'Even posted bond that\'s a bond that no one could ever break',
    'Truly independent sold my sould to the game', 
    'Maybe I\'m just trippin but the truth is I\'m in pain',
    'This what keep me sane when I\'m down who gon\' pick me up?' 
];

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}