
/**
 * Created by alex on 19/03/2016.
 */
$(document).ready(function(){
    'use strict';
    console.log('main.js loaded');

    paper.install(window);//instala la libreria a nivel global
    paper.setup(document.getElementById('mainCanvas'));//atacha paper al canvas
    //componentes del dibujo
    var c = Shape.Circle(200, 200, 50);
    c.fillColor = 'green';
    paper.view.draw();//le indico que dibuje
});