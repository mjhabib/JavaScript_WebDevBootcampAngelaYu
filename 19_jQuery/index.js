$(document).ready(function () {
    // useful when our jQuery library is not fully loaded. Like when we place our link in a wrong line of code!
});

// if we don't provide the second parameter, it returns all the properties of the first parameter. Ex: rgb(0, 0, 0)
$('h1').css('color', 'green');

$('h1').addClass('big-title margin-50');
// $('h1').removeClass('big-title');

$('h2').text('new text');

$('h3').html('<em> html text </em>');

$('button').text('all buttons');

$('img').attr('src', 'img2.png');

$('a').attr('href', 'https://www.yahoo.com');

$('a').text('Search');

$('h1').click(function () { 
    $(this).css('color', 'blue')    
});

$('button').click(function () { 
    $('h1').css('color', 'purple')    
});

$('input').keydown(function (e) { 
    $('h2').text(e.key)
});

$('h1').mouseover(function () { 
    $(this).css('color', 'black')
});

// or
$('h2').on('mouseover', function () {
    $(this).css('color', 'darkgreen')
});

$('h1').before('<button>New button before h1</button>');
$('h1').after('<button>New button after h1</button>');
$('h1').append('<button>New button append h1</button>');
$('h1').prepend('<button>New button prepend h1</button>');

// remove all buttons
// $('button').remove();

// adding animations
$('button').click(function () { 
    // $('h1').hide();
    // $('h1').show();
    $('h1').toggle();
    
    // fadeOut, fadeIn, fadeToggle, slideUp, slideDown, slideToggle, 
});

// custom animation
$('h1').mouseout(function () { 
    $(this).animate({opacity: 0.5, margin: '10%'})  // I can only specify animate that has numeric values for example, it does not support coloring!
});

$('h2').mouseover(function () { 
    $(this).fadeIn().fadeOut().slideUp().slideDown().animate({margin: '20px'})
});