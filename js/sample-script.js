var windowWidth = $(window).width();
$("span").append(windowWidth);

// What does this script do?

// First, we create a variable (var) windowWidth. The dollar sign ($)
// then calls jQuery. We ask the library to find us the 'window'
// model. And we ask it to find the width of the window model.

// Next, the dollar sign ($) again signals to jQuery, "find the 'span'
// element and append (or 'place within the span tags') the value we
// calculated which is stored in the variable 'windowWidth'.

$("a").click(function() {
    event.preventDefault();
    location.reload();
});

// The script above 'binds' a response to a user action. In this case,
// when the user clicks our link, the location -- the page we are
// currently on -- will reload.

// You may be asking, what does event.preventDefault mean?

// When a user clicks on a link, the 'default' event is for the browser
// to send the user to the url in the hypertext reference. By
// preventing the default event, in this case, we keep the user on the
// current page, regardless of what value provided in the href
// attribute.

// In index.html, change the value of href to http://google.com. See
// how it works? :)
