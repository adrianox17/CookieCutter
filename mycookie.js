$(document).ready(function(){
console.log('Test');	
  $('#OrderSugarCookies').click(function(event){
    var nrSugarCookies = $('#nrSugarCookies')[0].value;
    Cookies.set('sugarCookiesNumber', nrSugarCookies);
  });

  $('#OrderChocolateCookies').click(function(event){
    var nrChocolateCookies = $('#nrChocolateCookies')[0].value;
    Cookies.set('chocolateCookiesNumber', nrChocolateCookies);
  });

 $('#OrderLemonCookies').click(function(event){
    var nrLemonCookies = $('#nrLemonCookies')[0].value;
    Cookies.set('lemonCookiesNumber', nrLemonCookies);
  });

var SavedSugar = Cookies.get('sugarCookiesNumber');
$('body').append(' You just got ' +SavedSugar+ " Sugar Cookies!")  

var SavedChocolate = Cookies.get('chocolateCookiesNumber');
$('body').append(' You just got ' +SavedChocolate+ " Chocolate Cookies!")

var SavedLemon = Cookies.get('lemonCookiesNumber');
$('body').append(' You just got ' +SavedLemon+ " Lemon Cookies!")


});