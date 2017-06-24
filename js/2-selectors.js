'use strict'

$( function() {
    
//    pobieranie elementów po znaczniku
    
    var paragraphs = $('p');
    console.log(paragraphs);
    
//    pobieranie elementów po id
    
    var paragraphOne = $('#paragraf');
    console.log(paragraphOne);
    
//    pobieranie elementów po klasie
    
    var paragraphTwo = $('.paragraf');
    console.log(paragraphTwo);
});