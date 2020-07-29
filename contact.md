---
title: /contact
layout: page
permalink: /contact
---

## Get in touch?

<form> 
  <input type="text" id="name" name="name" placeholder="name:" autocomplete="off">
  <input type="email" id="email" name="email" placeholder="email:" autocomplete="off">
  <textarea rows="5" id="message" name="message" placeholder="message:" autocomplete="off"></textarea>
  <input type="submit" onclick="mail()"  value="[ submit ]">
</form>

<script>
       function mail() {
                var email = document.createElement("a");
                email.href = "mailto:keer4n@gmail.com?subject=" 
                        + document.getElementById("name").value 
                        + "(" + document.getElementById("email").value + ")"
                        + "&body="
                        + encodeURIComponent(document.getElementById("message").value); 
                email.click();
       }
</script>

<br /><br/>(Form will redirect to your default email client.)
