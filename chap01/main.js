
/**
 * Created by alex on 19/03/2016.
 */
$(document).ready(function(){
    'use strict';
    console.log('main.js loaded');

    paper.install(window);//instala la libreria a nivel global
    paper.setup(document.getElementById('mainCanvas'));//atacha paper al canvas
    //manipulando ingreso de usuario
    var tool = new Tool();//handler user input
    tool.onMouseDown = function (event){
        var c = Shape.Circle(event.point, 20);
        c.fillColor = 'green';
    };
    var circle = Shape.Circle(200, 200, 80);
    circle.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';
    paper.view.draw();//le indico que dibuje
});