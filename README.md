
# Final - Part 3

**[Link to GitHub repo](https://github.com/jaenlle/project_final3_aenlle_julio)**

**[Link to project on web host](http://www.julioaenlle.net/project_final3_aenlle_julio/)**



## Resources

### Custom Javascript

The custom javascript uses `document.getElementById` to pick out the `h1` tag on the hompage, `.createElement` to create a new `h2`, `innerHTML` to add the new `h2` content and finally `.appendChild` to add the new h2 to the document. The event listener is `mouseenter` and is added to the id "homeh1". I also used `.removeEventListener` to stop the addition of the `h2` after just one mouse enter event.

### Custom jQuery
A second custom jQuery is located on the Gift Cards page. It adds a surprise deal for any lucky visitor who clicks on a button to buy a Chotchkie's gift card. I used the [.click()](https://api.jquery.com/click/) article on jQuery.com to learn more about using mouse event. The click function adds text when the user clicks on the button and `.off('click')` limits the action to just on click.

I also used the jQuery hover effect I had previously learned about [here](http://bavotasan.com/2009/a-simple-mouseover-hover-effect-with-jquery/) to re-create the hover effect for the site's social media icons.  

 

### jQuery Plugins

* [SlipHover](http://wayou.github.io/SlipHover/) - SlipHover is a jQuery that provides an image hover effect that cover images with an opaque layer and text. I used it on the homepage images. 

* [Textillate.js](http://textillate.js.org/) - Textillate is a combination of lettering.js and automate.css. It uses lettering.js to split words or blocks of text into separate spans for each letter, and then uses animate.css to animate each letter (automate.css can only animate whole words). I applied it to the `h1` for the menu, giftcard, and location pages. 

### Other Resources

* [The Current State of Telephone Links - CSS Tricks](https://css-tricks.com/the-current-state-of-telephone-links/) - Referenced to learn how to create clickable telephone links. Interesting to note that iPhones do this automatically so this is more for other mobile OSes. 

* [Using Animate.css and jQuery for easy Web Animation](https://www.youtube.com/watch?v=CBQGl6zokMs) - Watched to learn more about animate.css

* [JavaScript Errors and How to Fix Them](https://davidwalsh.name/fix-javascript-errors) - Used to learn more about the errors appearing in the DevTools console

* [Unique Pages, Unique CSS Files](https://css-tricks.com/unique-pages-unique-css-files/) & [One, Two, or Three](https://css-tricks.com/one-two-three/)- Interesting reads about when to use multiple files for styling

* [EventTarget.removeEventListener()](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) - Read to learn how to stop an event listener after one event (Thanks for tip!)