/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function socials(){

  var htmlContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Email</title>
    <style>
    body {
      background-image: url("https://i.imgur.com/hhP1fAb.png");
      color: black;
      font-family: Arial, Helvetica, sans-serif;
    }
    p {
      font-size: 20px;
    }
    a {
      color: purple;
      text-decoration: underline;
    }
    </style>
  </head>
  <body>
  <p> My Email is dusqcomputer@gmail.com </p>
  <p> My Phone Number is +1 561 229 2972 </p>
  <p> If you want to reach me by phone, it is best to send an SMS </P>
  <p></p>
   <a href="https://www.youtube.com/channel/UC_qIzYkWdnJj5YTfVU-Idhg">My YouTube</a> 
   <p></p>
  <a href="https://github.com/AndreiKharchenko1/">My GitHub</a>
  <p></p>
   <a href="https://andreikh.itch.io/">My Itch Store</a> 
  
  </body>
  </html>
`;
var blob = new Blob([htmlContent], { type: 'text/html' });

var url = URL.createObjectURL(blob);

var features = 'width=600,height=200';

var subWindow = window.open(url, '_blank', features);

if (subWindow) {
  subWindow.focus();
}
 
}