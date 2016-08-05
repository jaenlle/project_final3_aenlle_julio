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

    //Custom jQuery click effect is used to notify potential gift card purchasers that they will get a treat or a discount if they buy a card. The click function adds text when the user clicks on the button and .off('click') limits the action to just on click.
    $('#butt1').click(function () {
        $(this).append("<p>Congrats! Since we're so glad you've decided to order this gift card we're giving you a free side of queso!</p>").off('click');
    });

    $('#butt2').click(function () {
        $(this).append("<p>Congrats! Since we're so glad you've decided to order this gift card we're lowering the price to only $20!").off('click');
    });

    $('#butt3').click(function () {
        $(this).append("<p>Congrats! Since we're so glad you've decided to order this gift card we're lowering the price to only $40!").off('click');
    });

    $('#butt4').click(function () {
        $(this).append("<p>Congrats! Since we're so glad you've decided to order this gift card we're lowering the price to only $85!").off('click');
    });

});


// Plugin # 2: Textillate is a combination of lettering.js and automate.css. It uses lettering.js to split words or blocks of text into separate spans for each letter, and then uses animate.css to animate each letter (automate.css can only animate whole words). I applied it to the h1 tags for the menu, giftcard, and location pages.
$('.textillate').textillate({
    autostart: true,
    in: { effect: 'bounce', shuffle: false },
    out: { effect: 'wobble', shuffle: false },
    loop: true
});
