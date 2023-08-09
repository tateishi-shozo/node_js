import {Item} from './item';
import {Theme10} from './theme10';

var elem = document.getElementById('output');
var aBook = new Item('はじめてのTypeScript',1980);
aBook.say(elem);

var elem = document.getElementById('theme10');
var theme = new Theme10();

if(elem == null){
    throw  new Error('elemがnullです');
}

elem.innerHTML = theme.fibonacci(10).toString();