# DOM - Document Object Model 🔥
<br>
DOM (Document Object Model) হলো একটি ওয়েব পেজের গাছের (Tree) মতো কাঠামোগত উপস্থাপন, যা JavaScript-এর মাধ্যমে HTML ডকুমেন্টকে পড়তে, পরিবর্তন করতে এবং নিয়ন্ত্রণ করতে সাহায্য করে।

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



### Exploring the Document Object Model (DOM)
01. DOM Intro
02. Traversing(খুজে বের করা) DOM - getElementbyTagName
03. Traversing DOM - getElementByClassName VS getElementById
04. Traversing DOM - getElementByQuerySelector | querySelectorAll
- NodeList vs HTMLCollection ? 
05. Dynamic style, getAttribute, setAttribute, innerText, innerHTML
