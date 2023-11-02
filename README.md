# Lesson 4.1: Storing Input

### Input Fields
Input fields are HTML elements that allow you to collect data from the user. They are typically found within forms on web pages.

Here's an example of an HTML input field for an email:
```html
<input class="user-input" type="email" placeholder="Enter your email">
```

### The `.value` Property
In JavaScript, the `.value` property is used to get the current value of an input field. This is essential for collecting user input.

### Event Listeners
Event listeners are used to wait for events to occur, like a button click, and then perform actions in response.


### Adding an Input Field and Button in HTML
Here's how you can add an input field and a button to your HTML:
```html
<input class="user-input" placeholder="Email">
<button>Login</button>
```

### Adding an Event Listener in JavaScript
To make your webpage interactive, you add an event listener to the button:
```javascript
let button = document.querySelector("button");
button.addEventListener("click", function() {
  let userInput = document.querySelector(".user-input").value;
  console.log(userInput);
});
```
When the button is clicked, the value from the input field will be printed to the console.

### Displaying User Input on the Webpage
You can use `.innerHTML` to display the user input within a different HTML element:
```javascript
button.addEventListener("click", function() {
  let userInput = document.querySelector(".user-input").value;
  document.querySelector(".display").innerHTML = userInput;
});
```

### Converting String Input to a Number
Since inputs are returned as strings, you might need to convert them to numbers for calculations:
```javascript
let num = Number(document.querySelector(".user-input").value);
```

### Complete Example
Here’s a complete example of HTML and JavaScript code that creates an input field, listens for a button click, and displays the input on the webpage:
```html
<!-- HTML -->
<input class="user-input" placeholder="Type something...">
<button>Submit</button>
<div class="display"></div>
```

```javascript
// JavaScript
let button = document.querySelector("button");

button.addEventListener("click", function() {
  let userInput = document.querySelector(".user-input").value;
  document.querySelector(".display").innerHTML = userInput;
});
```
