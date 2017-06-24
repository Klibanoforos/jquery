'use strict'

jQuery (document).ready( function() {

//    pobieranie tekstu
    var tekstParagrafuPierwszego = $('paragraf').text();
    console.log(tekstParagrafuPierwszego);
    
//    dodawanie tekstu
    $('.paragraf').text(tekstParagrafuPierwszego);
    
//    dodawanie HTML
    $('.paragrafnext').html('To jest <strong>paragraf</strong> z dodanym <br> HTML');
    
//   dodawanie treści na końcu selektora
    $('.paragrafnext').append('Tekst na końcu selektora');
    
//    dodawanie tresci za selektorem
    $('.paragrafnext').after('Treść za selektorem');
    
//    usuwanie elemen tu i jego zawartości
    $('strong').remove();
    
//    usuwanie tylko zawartości elementu
    $('.paragraf').empty();
    
//    dodawanie CSS
    $('.paragrafnext').css({'font-size': '3em', 'color': 'red'});
    
//    dodawanie klasy
    $('h1').addClass('blue');
    
//    dodawanie atrybutu
    $('h1').attr('imie', 'Marcin');
});