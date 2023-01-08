### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
          -async callbacks will run after the rest of the code

- What is a Promise?
          - a one time guarantee of a future value
          - usually associated with async functions. The "promise" value is what you get in between the async code running and actually delivering a  value 

- What are the differences between an async function and a regular function?
          - a regular function will execute and return a value immiediately. An async function will make a request, return a "promise" value while retrieving that request, then it will return the value. The main difference is that other code in the file can run while the async function is being executed, unless an await has been placed with the async function. If an await has been placed, the JS file will "pause" until the async callback is finished and a value is returned 

- What is the difference between Node.js and Express.js?
          - node.js handles the server side logic. Express.js handles the route and event handlers on the web page. Node is similar to python, express is similar to flask 

- What is the error-first callback pattern?
          - the first argument of a callback functionis reserved for the error object, the second argument of the callback is reserved for any successful resonse data 

- What is middleware?
           - middleware is code that runs in the middle of the request/response cycle 
           - middleware ar functions that get access to the req and res objects and can also call `next`

- What does the `next` function do?
          - will run or execute code after all the middleware function is finished. If next is returned, the code will jump out of the callback and any code remaining in the callback function will NOT run 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
          1. We are making 3 separate requests, and each request has to WAIT for the request above it to finish before it can begin fetching data
              - a sub for this would be using Promise.all()
          2. The return values will be A LOT of data. Very difficult to read through. It would be recommended to narrow down the data needed