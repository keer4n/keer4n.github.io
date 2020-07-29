---
layout: post
title: Contact forms
date: 2020-07-28 17:11 -0700
---

## Creating Contact forms for static pages

The goal is to create a contact form for a static page which upon submission will invoke the default email client with contents populated.

We will accomplish this using `Javascript` and the `mailto` links.

```html
<form> 
  <input type="text" id="name" />
  <input type="email" id="email" />
  <textarea rows="5" id="message" ></textarea>
  <input type="submit" onclick="mail()" value="[ submit ]" />
</form>
```

```javascript
function mail() {
  var email = document.createElement("a");
  email.href = "mailto:keer4n@gmail.com?subject=" 
    + document.getElementById("name").value 
    + "(" + document.getElementById("email").value + ")"
    + "&body="
    + encodeURIComponent(document.getElementById("message").value); 
  email.click();
}
```       

