
/**
 * Created by alex on 19/03/2016.
 */
$(document).ready(function(){
    'use strict';
    console.log('main.js loaded');

    paper.install(window);//instala la libreria a nivel global
    paper.setup(document.getElementById('mainCanvas'));//atacha paper al canvas
    //dibujando 64 circulos 
    var c;
    for (var x = 25; x < 400; x += 50){
        for (var y = 25; y < 400; y += 50){
            c = Shape.Circle(x, y, 20);
            c.fillColor = 'green';
        }
    }
    paper.view.draw();//le indico que dibuje
});