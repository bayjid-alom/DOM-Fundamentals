✔️ childNode Finding : step-by-step

document.getElementById("players-container").childNodes
NodeList(3) [text, ul, text]

document.getElementById("players-container").childNodes[1]
<ul>​…​</ul>​

document.getElementById("players-container").childNodes[1].childNodes
NodeList(11) [text, li, text, li, text, li, text, li, text, li, text]

|------------------------------|
document
   ↓
<html>
   ↓
<body>
   ↓
<main>
   ↓
#players-container
   ↓
<ul>
   ↓
<li>
|------------------------------|




✔️ parentNode Finding: step-by-step

document.getElementById("players-container").parentNode
<main>​…​</main>​

document.getElementById("players-container").parentNode.parentNode
<body style=​"background-color:​ rgb(223, 249, 251)​;​">​…​</body>​

document.getElementById("players-container").parentNode.parentNode.parentNode
<html lang=​"en">​view-sourcescroll<head>​…​</head>​<body style=​"background-color:​ rgb(223, 249, 251)​;​">​…​</body>​</html>​

document.getElementById("players-container").parentNode.parentNode.parentNode.parentNode
#document (http://127.0.0.1:5500/index.html)#top-layer

document.getElementById("players-container").parentNode.parentNode.parentNode.parentNode.parentNode
nullk.......... eta easily bujhar jonno kichu likhe daw arrow arroea diye for parent and for Child

|------------------------------|
#players-container
      ↑
   <main>
      ↑
   <body>
      ↑
   <html>
      ↑
 document
      ↑
   null
|------------------------------|