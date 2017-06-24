'use strict';

//upewnienie, że wszystko zadziała dopiero po załadowaniu strony (takie body jquery)

$( function() {

//    zmiana koloru nagłówka (ajdi 'first')
    
    $('#first').css({color: 'red'}).hide(2000).show( 3000 );
    
} );