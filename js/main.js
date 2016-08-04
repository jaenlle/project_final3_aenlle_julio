$(document).ready(function () {

    // Custom Javascript: The custom javascript uses document.getElementById to pick out the h1 tag on the hompage, .createElement to create a new h2, innerHTML to add the new h2 content and finally .appendChild to add the new h2 to the document. The event listener is mouseenter and is added to the id "homeh1". I also used .removeEventListener to stop the addition of the h2 after just one mouse enter event.
    var homeh1 = document.getElementById('homeh1');

    function addh2() {
        var newtext = document.createElement('h2');
        newtext.innerHTML = 'Good Food &amp; Good Fun, With Flair!';
        document.getElementById('homeh1').appendChild(newtext);
        homeh1.removeEventListener('mouseenter', addh2); //removes event listener
    }

    homeh1.addEventListener('mouseenter', addh2);

    // Plugin # 1: SlipHover is a jQuery that provides an image hover effect that cover images with an opaque layer and text. I used it on the homepage images.
    $('#homecontent').sliphover({
        backgroundColor: 'rgba(200,30,33,.7)'
    });
});


// Plugin # 2: Textillate is a combination of lettering.js and automate.css. It uses lettering.js to split words or blocks of text into separate spans for each letter, and then uses animate.css to animate each letter (automate.css can only animate whole words). I applied it to the h1 tags for the menu, giftcard, and location pages.
$('.textillate').textillate({
    autostart: true,
    in: { effect: 'bounce', shuffle: false },
    out: { effect: 'wobble', shuffle: false },
    loop: true
});
