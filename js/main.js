$(document).ready(function () {

    // Custom Javascript: adds the Chotchkie's tagline whenever the mouse enter the homepage h1 element
    function addh2() {
        var newtext = document.createElement('h2');
        newtext.innerHTML = 'Good Food &amp; Good Gun, With Flair!';
        document.getElementById('homeh1').appendChild(newtext);
        homeh1.removeEventListener('mouseenter', addh2); //removes event listener
    }

    homeh1.addEventListener('mouseenter', addh2);

    // Plugin # 1:



    // Plugin # 2:
});
