---
title: "Contact"
layout: "home.html"
---
* [Tumblr](https://fire7541.tumblr.com)
* [Twitter](https://twitter.com/fire7541) ([alt](https://twitter.com/eitosuicide))
* [ko-fi](https://ko-fi.com/fire7541)
* realfire7541@gmail.com 

Alternatively, feel free to send a message using the form below.
<form action="assets/contact.php" method="post">
				<label for="name">Name:</label>
				<input type="text" id="name" name="user_name"/><br><br>
				<label for="mail">E-mail:</label>
				<input type="email" id="mail" name="user_mail" /><br><br>
            <label for="site">Website:</label>
            <input type="url" id="site" name="website"/><br><br>
				<label for="msg">Message *:</label>
				<textarea id="msg" name="user_message" required></textarea>

			<p class="button">
				<button type="submit">Submit</button>
                </form>
                <p id="log"></p>
<script>
const form = document.getElementById("form");
const log = document.getElementById("log");

function logSubmit(event) {
  log.textContent = `Form Submitted! Timestamp: ${event.timeStamp}`;
  event.preventDefault();
}

form.addEventListener("submit", logSubmit);
</script>