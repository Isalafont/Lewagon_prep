// to run in the console 

javascript:if(!window.jQuery||confirm('Overwrite\x20current\x20version?\x20v'+jQuery.fn.jquery))(function(d,s){s=d.createElement('script');s.src='https://ajax.googleapis.com/ajax/libs/jquery/1.8/jquery.js';(d.head||d.documentElement).appendChild(s)})(document);

// to hide Le Wagon logo 

$('#lewagon-logo').hide()

// to show Le wagon Logo 

$('#lewagon-logo').show()

// To turn background logo into green : 

$('#lewagon-logo').css('background-color', 'green')

// to turn round logo into green : 

$('.navbar-container').css('-webkit-filter', 'hue-rotate(180deg)')

// Resource article 
// https://www.lewagon.com/blog/from-jquery-to-dom-and-es6