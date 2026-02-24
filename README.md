# 1️) What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## 📌getElementById()
- Selects one element
- Uses id
- Returns a single element object
- Fastest method
- Example: `const element = document.getElementById("myId");`

## 📌getElementsByClassName()
- Selects multiple elements using class name
- Returns an HTMLCollection
- It is live (automatically updates if DOM changes)
- Example: `const elements = document.getElementsByClassName("myClass");`

## 📌querySelector()
- Selects the first matching element
- Uses CSS selectors
- More flexible
- Example: `const element = document.querySelector(".myClass");`

## 📌querySelectorAll()
- Selects all matching elements
- Returns a NodeList
- Not live (static list)
- Example: `const elements = document.querySelectorAll(".myClass");`


# 2) How do you create and insert a new element into the DOM?
1. Step 1: Create element => `const newDiv = document.createElement("div");`
2. Step 2: Add content => `newDiv.textContent = "Hello World!";`
3. Step 3: Insert into DOM =>
   - `document.body.append(newDiv);`
   - `document.body.appendChild(newDiv);`
   - `document.body.prepend(newDiv);`

# 3) What is Event Bubbling? And how does it work?
🔖Definition:
Event Bubbling is a mechanism where an event starts from the target element and then propagates upward to its parent elements.

If you click a button inside a div:
- First → Button event runs
- Then → Div event runs
- Then → Body event runs
```
document.getElementById("child").addEventListener("click", function () {
    console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function () {
    console.log("Parent clicked");
});
```
Clicking the child will trigger:
- Child clicked
- Parent clicked

# 4) What is Event Delegation in JavaScript? Why is it useful?
🔖Definition:
Event Delegation is a technique where instead of adding event listeners to multiple child elements, you add a single event listener to their parent.
It works because of event bubbling.
🔖Example:
```
document.getElementById("list").addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        console.log("Item clicked:", event.target.textContent);
    }
});
```
🔖Why is it useful?
- Better performance
- Works for dynamically added elements
- Cleaner code
- Fewer event listeners

# 5) What is the difference between preventDefault() and stopPropagation()?
✨**preventDefault()**
- Stops the default browser behavior
- Example: Prevent form submission or link navigation
  `event.preventDefault();`
Example:
```
document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
});
```
✨**stopPropagation()**
- Stops event from bubbling up
- Prevents parent event handlers from running
- Example: `event.stopPropagation();`








