

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>



  <body>
    <h1>My greeter page</h1>
<p>

</p>
const greeter = () => {
    let userName = document.getElementById("user-input").value
    document.getElementById("output").innerHTML = `Welcome, ${userName}!`
  }
    
    <input type="text" id="user-input">
    <button type="button" name="button" onclick="greeter()">Click me!</button>
    <h3 id="output"></h3>
    <script type="text/javascript" src="greeter.js"></script>
  </body>
</html>

  document.getElementById("idHere").value
document.getElementById("idHere").innerHTML
