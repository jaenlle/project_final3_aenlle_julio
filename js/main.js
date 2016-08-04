$(document).ready(function () {

    // Custom Javascript: adds the Chotchkie's tagline whenever the mouse enter the homepage h1 element
    var homeh1 = document.getElementById('homeh1');

    function addh2() {
        var newtext = document.createElement('h2');
        newtext.innerHTML = 'Good Food &amp; Good Fun, With Flair!';
        document.getElementById('homeh1').appendChild(newtext);
        homeh1.removeEventListener('mouseenter', addh2); //removes event listener
    }

    homeh1.addEventListener('mouseenter', addh2);

    // Plugin # 2:

    // Plugin # 1: The plugin's name is SlipHover. It creates a hover overlay that is dependent on the direction in which the mouse enters the image area.
    $('#homecontent').sliphover({
        backgroundColor: 'rgba(200,30,33,.7)'
    });
});

$('.textillate').textillate({
    autostart: true,
    in: { effect: 'bounce', shuffle: false },
    out: { effect: 'wobble', shuffle: false },
    loop: true
});
