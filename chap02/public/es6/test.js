/**
 * A modo de ejemplo voy a probar ES6
 * Created by alex on 19/03/2016.
 */
'use strict';
//block-scoped "let" declaration
const sentences = [
    {subject: 'Java', verb: 'is', object: 'old'},
    {subject: 'Cars', verb: 'are', object: 'fast'},
];
//object destructuring
function say({subject, verb, object}){
    //template string
    console.log(`${subject} ${verb} ${object}`);//eslint-disable-line
}
//for ..of
for(let s of sentences){
    say(s);
}