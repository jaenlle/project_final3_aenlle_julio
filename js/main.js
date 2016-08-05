$(document).ready(function () {

    //Custom jQuery hover effect for the social media icons in the footer and on the location page
    $('.twitter').hover(function () { //creates hover state for the footer twitter icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/twitter_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/twitter_white.png');
    });

    $('.facebook').hover(function () { //creates hover state for the footer facebook icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/fb_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/fb_white.png');
    });

    $('.instagram').hover(function () { //creates hover state for the footer instagram icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/ig_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/ig_white.png');
    });

    $('.lo_twitter').hover(function () { //creates hover state for the location page twitter icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/twitter_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/twitter_red.png');
    });

    $('.lo_facebook').hover(function () { //creates hover state for the location page facebook icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/fb_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/fb_red.png');
    });

    $('.lo_instagram').hover(function () { //creates hover state for the location page instagram icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/ig_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/ig_red.png');
    });

    // Custom Javascript: The custom javascript uses document.getElementById to pick out the h1 tag on the hompage, .createElement to create a new h2, innerHTML to add the new h2 content and finally .appendChild to add the new h2 to the document. The event listener is mouseenter and is added to the id "homeh1". I also used .removeEventListener to stop the addition of the h2 after just one mouse enter event.
    var homeh1 = document.getElementById('homeh1');

    function addh2() {
        var newtext = document.createElement('h2');
        newtext.innerHTML = 'Good Food &amp; Good Fun, With Flair!';
        document.getElementById('homeh1').appendChild(newtext);
        homeh1.removeEventListener('mouseenter', addh2); //removes event listener
    }

    homeh1.addEventListener('mouseenter', addh2);

    //Custom jQuery hover effect for the social media icons in the footer and on the location page
    $('.twitter').hover(function () { //creates hover state for the footer twitter icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/twitter_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/twitter_white.png');
    });

    $('.facebook').hover(function () { //creates hover state for the footer twitter icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/fb_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/fb_white.png');
    });

    $('.instagram').hover(function () { //creates hover state for the footer twitter icon
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/ig_green.png');
    }, function () {
        $(this).attr('src', 'http://www.julioaenlle.net/project_final3_aenlle_julio/img/social/ig_white.png');
    });

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
