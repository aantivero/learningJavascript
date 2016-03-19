/**
 * A modo de ejemplo voy a probar ES6
 * Created by alex on 19/03/2016.
 */
'use strict';
//block-scoped "let" declaration
const sentences = [
    {subject: 'JavaScript', verb: 'is', object: 'great'},
    {subject: 'Elephants', verb: 'are', object: 'large'},
];
//object destructuring
function say({subject, verb, object}){
    //template string
    console.log(`${subject} ${verb} ${object}`);
}
//for ..of
for(let s of sentences){
    say(s);
}