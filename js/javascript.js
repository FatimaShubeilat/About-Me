'use strict';
var score =0;

var name = prompt('Whoa! glad someone showed up finally, I was expecting you, remind me with your name again please?');
alert('Hi ' + name + ' please take a seat, we will be asking you 5 short questions');

function personal (){

    var any = prompt('Do I Use Social Media for more than 2 hours?');
    any = any.toLowerCase();
    if (any == 'yes' || any == 'y') {
        alert('ah ah aah, I use my time wisely');
        // conole.log('YES! You need to use your time wisely');
    }
    else if (any == 'no' || any == 'n') {
        alert('True, I don\'t use it so much');
        score ++;
        // console.log('No! My Maaan! who is the wise now? ;)');
    }
    
    var crim = prompt('Ever I had to run from the police?');
    crim = crim.toLowerCase();
    
    if (crim == 'yes' || crim == 'y') {
        alert('Excuse me! I am a good citizen');
        // console.log('YES! Watch out we have a villian here');
    } else if (crim == 'no' || crim == 'n') {
        alert('Yeah, I never did that, but who knows tehe');
        score ++;
        // console.log('That\'s my angel');
    }
    
    
    var sec = prompt('Am I keeping a big secret from someone?');
    sec = sec.toLowerCase();
    
    if (sec == 'yes' || sec == 'y') {
        alert('YES! like who does not!');
        score ++;
    } else if (sec == 'no' || sec == 'n') {
        alert('Since no, then it\'s not a secret anymore.');
        // console.log('it\'s not a secret anymore');
    }
    
    var bot = prompt('Am I afraid of robots?');
    bot = bot.toLowerCase();
    
    if (bot == 'yes' || bot == 'y') {
        alert('Why? Am afraid of humans more :p ');
        // console.log('Why? What did I do to you? :\'( ');
    } else if (bot == 'no' || bot == 'n') {
        alert('Sure I do not :)');
        score ++;
        // console.log('happy to hear that *blushing* ');
    }
    
    
    var dark = prompt('Am I afraid of the dark?');
    dark = dark.toLowerCase();
    
    if (dark == 'yes' || dark == 'y') {
        alert('Oh, you think darkness is your ally. But you merely adopted the dark; I was born in it, molded by it. Oh sorry I went to far :p, but no I don\'t');
        // console.log('My webpage brightness will keep you away from darkness :) ');
    } else if (dark == 'no' || dark == 'n') {
        alert('yes dark does not bother me, it is what hidden beneath it :(');
        score ++;
        // consol.log('Keep it off I\'ll got to sleep and leave you with my webpage :D');
    }
    
personal();

function guessgame (){

for (let index = 0; index < 4; index++) {
    
var numberGuess = prompt('how much do I like summer? Come on guess a number out of 100')
if(numberGuess == 90){
    score ++;
    alert('Yes! now you get it ;)');
    break;
}
else if(numberGuess <= 50)
{
    alert('Too low');
}
else if(numberGuess > 90)
{
    alert('Too high');
}
else if(index == 3) {
alert('Sorry you only have 4 times to try, I love summer! so it would be 90 :D ')
}
}
}
guessgame()
// console.log(score);

//  7th question

function favauthor (){
var authorFav = ['paulo' , 'jubran' , 'mustafa' , 'john', 'tawfiq', 'amal' ];

for (let i = 0 ; i < 6 ; i++) {

    var multipleAnsw = prompt('Can you name some of my authors\', the first name would do it?');
    multipleAnsw = multipleAnsw.toLowerCase();

for (let j =0; j < 6; j++) {
if (multipleAnsw == authorFav[j])
{
    alert('YES! that is right he is one of my favourites :) ');
    score++;
    var checkingOut = 1;
    break;
}
}
if(checkingOut == 1) {break;}
}
}

favauthor()

alert('well, seems you got ' + score + ' out of 12');

// trying to merge
