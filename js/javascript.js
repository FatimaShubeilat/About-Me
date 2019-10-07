'use strict';

var name = prompt('Whoa! glad someone showed up finally, I was expecting you, remind me with your name again please?');
alert('Hi ' + name + ' please take a seat, we will be asking you 5 short questions');

var any = prompt('Do you Use Social Media for more than 2 hours?');
any = any.toLowerCase();
if (any == 'yes' || any == 'y') {
    alert('YES! You need to use your time wisely');
    // conole.log('YES! You need to use your time wisely');
}
else if (any == 'no' || any == 'n') {
    alert('No! My Maaan! who is the wise now? ;)');
    // console.log('No! My Maaan! who is the wise now? ;)');
}

var crim = prompt('Ever had to run from the police?');
crim = crim.toLowerCase();

if (crim == 'yes' || crim == 'y') {
    alert('YES! Watch out we have a villian here');
    // console.log('YES! Watch out we have a villian here');
} else if (crim == 'no' || crim == 'n') {
    alert('That\'s my angel');
    // console.log('That\'s my angel');
}


var sec = prompt('Are you keeping a big secret from someone?');
sec = sec.toLowerCase();

if (sec == 'yes' || sec == 'y') {
    alert('YES! Keep it this way');
} else if (sec == 'no' || sec == 'n') {
    alert('it\'s not a secret anymore');
    // console.log('it\'s not a secret anymore');
}

var bot = prompt('Are you afraid of robots?');
bot = bot.toLowerCase();

if (bot == 'yes' || bot == 'y') {
    alert('Why? What did I do to you? :\'( ');
    // console.log('Why? What did I do to you? :\'( ');
} else if (bot == 'no' || bot == 'n') {
    alert('happy to hear that *blushing* ');
    // console.log('happy to hear that *blushing* ');
}


var dark = prompt('Are you afraid of the dark?');
dark = dark.toLowerCase();

if (dark == 'yes' || dark == 'y') {
    alert('My webpage brightness will keep you away from darkness :) ');
    // console.log('My webpage brightness will keep you away from darkness :) ');
} else if (dark == 'no' || dark == 'n') {
    alert('Keep it off I\'ll got to sleep and leave you with my webpage :D');
    // consol.log('Keep it off I\'ll got to sleep and leave you with my webpage :D');
}
