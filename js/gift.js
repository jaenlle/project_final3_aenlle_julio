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


    $(addQueso);

    function addQueso() {
        var addQ = document.createElement('p');
        var addQText = document.createTextNode('Order this gift card and receive a free side of queso!');
        addQ.appendChild(addQText);
        $('#queso').append(addQ);
    }

    $(addDiscount5);

    function addDiscount5() {
        var deal10 = document.createElement('p');
        var deal10Text = document.createTextNode('Special limited time offer! Get your $25 giftcard for only $20!');
        deal10.appendChild(deal10Text);
        $('#5off').append(deal10);
    }

    $(addDiscount10);

    function addDiscount10() {
        var deal25 = document.createElement('p');
        var deal25Text = document.createTextNode('Special limited time offer! Get your $50 giftcard for only $40!');
        deal25.appendChild(deal25Text);
        $('#10off').append(deal25);
    }

    $(addDiscount15);

    function addDiscount15() {
        var deal15 = document.createElement('p');
        var deal15Text = document.createTextNode('Special limited time offer! Get your $100 giftcard for only $85!');
        deal15.appendChild(deal15Text);
        $('#15off').append(deal15);
    }
});


// Plugin # 2: Textillate is a combination of lettering.js and automate.css. It uses lettering.js to split words or blocks of text into separate spans for each letter, and then uses animate.css to animate each letter (automate.css can only animate whole words). I applied it to the h1 tags for the menu, giftcard, and location pages.
$('.textillate').textillate({
    autostart: true,
    in: { effect: 'bounce', shuffle: false },
    out: { effect: 'wobble', shuffle: false },
    loop: true
});
