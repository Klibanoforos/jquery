'use strict';

$(function() {
    
    
//    efekt hide i show
    
    $('p').hide(3000).show(3000);
    
    
//    efekt fadeIn i fadeOut
    
    $('h1').fadeOut(3000).fadeIn(3000);
    
    
//    efekt sideUp i slideDown
    
$('h2').slideUp(3000).slideDown(3000);
    
   
    
    
//    funkcja zwrotna animacji = funkcja callback
    
    function animacja() {
        
        console.log('zakończono pierwszą animację. Zaraz startuje druga:)');
        
        $('h3').animate({'font-size': '1em', 'margin-left': '0px'}, 2000);
        
    }
    
//     efekt animacji z funkcją zwrotną
    
    $('h3').animate({'font-size': '3em', 'margin-left': '100px'}, 2000);
    
});