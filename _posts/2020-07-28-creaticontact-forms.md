---
layout: post
title: Contact forms
date: 2020-07-28 17:11 -0700
---

## Creating Contact forms for static pages

The goal is to create a contact form for a static page which upon submission will invoke the default email client with contents populated.

This can be accomplish using `Javascript` and the `mailto` hyperlinks.


`mailto` link allows emails to be sent via default email client of the user. A basic `mailto` link is shown below. 
```html
<a href="mailto:me@mysite.com"> Email me </a>
```
On clicking the link, a user's default email client is invoked with to-address populated.
Furthermore, since it is a link, parameters can be attached to specify other components of an email like subject, body, cc, bcc, etc. 
For a simple static sites like those created with jekyll, this type of contact forms can be used.

A simple form as shown below can be used to get information from  a user.

```html
<form> 
  <input type="text" id="name" />
  <input type="email" id="email" />
  <textarea rows="5" id="message" ></textarea>
  <input type="submit" onclick="mail()" value="[ submit ]" />
</form>
```

This form will have fields for *name*, *email* and *message*. Special care needs to be taken with the *message* field if we are to preseve the text formatting. This is required because we will use `Javascript` for extracting the field values to create the `mailto` link and values extracted from these fields are not encoded for URLs; meaning spaces, newline characters, etc. are present which cannot be included in a URL. URL Encoding[^1] can be done with the `encodeURIComponent()` function available in `Javascript`.

[^1]: [HTML URL Encoding Reference](https://www.w3schools.com/tags/ref_urlencode.ASP)

Following is a `Javascript` function that can be called for the `onclick` attribute of the submit button for previous form.
```javascript
function mail() {
  var email = document.createElement("a");
  email.href = "mailto:me@mysite.com?subject=" 
    + document.getElementById("name").value 
    + "(" + document.getElementById("email").value + ")"
    + "&body="
    + encodeURIComponent(document.getElementById("message").value); 
  email.click();
}
```       
Here, first an anchor (link) element is created, then its `href` attribute is set to a `mailto` link with specified to-address, subject & body parameters extracted from the form (notice the call to `encodeURIComponent` for the message body) and finally click event is simulated for the element.

This concludes the writeup. The contact form for this site is created using the same methods which can be viewed in [github](https://github.com/keer4n/keer4n.github.io) or by inspecting the [contact page](/contact) source.
