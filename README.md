# DOM - Document Object Model 🔥
<br>

- DOM (Document Object Model) হলো একটি ওয়েব পেজের গাছের (Tree) মতো কাঠামোগত উপস্থাপন, যা JavaScript-এর মাধ্যমে HTML ডকুমেন্টকে পড়তে, পরিবর্তন করতে এবং নিয়ন্ত্রণ করতে সাহায্য করে।
- DOM (Document Object Model) হলো ব্রাউজার যখন HTML ফাইল লোড করে, তখন সেই HTML পেজকে Object (Tree structure) এ রূপান্তর করার একটা system।

<br>

# JavaScript Connection Methods 🚀
This project explains the 3 ways to connect JavaScript with HTML.

## 📌 Methods of Writing JavaScript

### 01. Inline JavaScript
- HTML tag এর ভিতরে সরাসরি JavaScript লেখা হয়  
- Small testing এর জন্য ব্যবহার করা হয়  

---

### 02. Internal JavaScript
- Same HTML file এর ভিতরে `<script>` tag ব্যবহার করা হয়  
- Learning এবং ছোট project এর জন্য ভালো  

---

### 03. External JavaScript
- Alada `.js` file দিয়ে HTML এর সাথে connect করা হয়  
- Best practice এবং professional way

---
<br>


## ✔️ Summary : DOM Manipulation
foodElement.style.color = "gold";


### in browser | পেইজ লোড হলেই ভেরিয়েবল হারিয়ে যায় (যদি ব্রাউজারে কোনো ভেরিয়েবল ঘোষণা করা হয়)

- onst foodElement = document.getElementById("food-title")
- undefined
- foodElement.classList
- DOMTokenList [value: '']



### একটা ক্লাসের ভেল্যু অন্য একটি এলিমেন্ট এর প্রপার্টি হিসেবে ব্যবহার।
- প্রথমে ঘোষণাঃ const foodElement = document.getElementById("food-title")
- undefined
- foodElement.classList    (ক্লাস ভিতরে কয়টা আছে - Checking)
- DOMTokenList [value: '']
- foodElement.classList.add('bg-red')
- foodElement.classList.remove('bg-red')
- undefined
- foodElement.classList.add('bg-red')

- foodElement.classList;       (ক্লাস ভিতরে কয়টা আছে - Checking)
- DOMTokenList(2) ['bg-red', 'big', value: 'bg-red big']

- foodElement.getAttribute("id")  আইডি আছে কিনা?
- 'food-title'
- foodElement.getAttribute("class")  ক্লাস আছে কিনা?
- null
 
- foodElement.setAttribute('title' , 'Title of tooltip by JS')
- undefined


<br><br>


### What is Node?
- DOM-এর প্রতিটি অংশ (Element, Text, Comment ইত্যাদি) কে Node বলা হয়। Such as:
- DOM = HTML পেজের JavaScript Object Structure
- Node = DOM-এর একটি একক সদস্য (Unit)
- 

## NodeList vs HTMLCollection - কে কোনভাবে আউটপুট দেয়?
- getElementsByTagName  → HTMLCollection   (by...)
- querySelectorAll      → NodeList      (query...)


### 🧠 1️⃣ NodeList কেমন দেখতে?
- const nodes = document.querySelectorAll("section");
- console.log(nodes);
- 🔥 Output এর মতো দেখাবে:
- NodeList(3) [section, section, section]

 <br>

### 🧠 2️⃣ HTMLCollection কেমন দেখতে?
- const html = document.getElementsByTagName("section");
- console.log(html);
- 🔥 Output এর মতো দেখাবে:
- HTMLCollection(3) [section, section, section]


🧠 মনে রাখার ট্রিক :
- getElementById()      → Element
- querySelector()       → Element



### HTMLCollection vs NodeList (Differences)

1. Source
- HTMLCollection → only HTML elements
- NodeList → nodes (elements + text + comments)
 
2. Methods
- HTMLCollection → no forEach
- NodeList → has forEach (in most cases)
 
3. Live / Static
- HTMLCollection → Live (auto update)
- NodeList → Mostly Static (does not auto update)

4. Example
- HTMLCollection → getElementsByClassName()
NodeList → querySelectorAll()
<br>

## Style 

## ✔️ Node : Most Used
- parentNode
- childNodes

## ✔️ createElement : 
const newChild = document.createElement("li")
undefined
newChild
<li> ​</li>​
newChild.innerText = "This is new Child"
'This is new Child'

check: 04_child.js

✔️ 3 important tasks : to crate a new element
01. created clement and set innerText or innerHTML
02. find the parent where you will add the child
03. append the child to the parent





### Exploring the Document Object Model (DOM)
01. DOM Intro
02. Traversing(খুজে বের করা) DOM - getElementbyTagName
03. Traversing DOM - getElementByClassName VS getElementById
04. Traversing DOM - getElementByQuerySelector | querySelectorAll
- NodeList vs HTMLCollection ? 
05. Dynamic style, getAttribute, setAttribute, innerText, innerHTML
06. Styling DOM properties, add and remove  CSS class using js
07. NodeList, HTMLCollection, parentNode, childNodes, createElement
08. create HTML elements using JavaScript and appendChild
09. Summary (DOM Review)
