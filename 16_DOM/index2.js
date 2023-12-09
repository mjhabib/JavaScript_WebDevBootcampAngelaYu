title = document.firstElementChild.firstElementChild.lastElementChild;
title.innerHTML = 'new title'

// or

title2 = document.querySelector('title');
title2.innerHTML = 'new new title'

// These elements are in a form of a list so we have to specify their indexes
h1 = document.getElementsByTagName('h1')
h1[0].style.color = 'green'

document.getElementsByClassName('h2_class')[1].style.color = 'blue'

// Single element, no need for indexing
document.getElementById('h2_id').style.color = 'red'

document.querySelector('.h2_class').innerHTML = 'new text'

document.querySelector('#li_id a').innerHTML = 'Google link'

// https://www.w3schools.com/jsref/dom_obj_style.asp

document.querySelector('h1').style.backgroundColor = 'lightgreen'

// This way I can specify a class in my css file and after this line executed, the style will apply
// document.querySelector('h1').classList.add('add_h1_class');

// removing an specific class name
// document.querySelector('h1').classList.remove('add_h1_class');

// or toggling the class name
document.querySelector('h1').classList.toggle('add_h1_class');

document.querySelector('h3').textContent = 'plain text'

document.querySelector('h3').innerHTML = '<em> html text </em>'

// manipulating attributes
document.querySelector('a').setAttribute('href', 'https://bing.com');

