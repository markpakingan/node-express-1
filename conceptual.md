### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?

<!-- You can use promises, callback, async/await -->


- What is a Promise?

<!-- a promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. -->

- What are the differences between an async function and a regular function?

<!-- An async function always returns a promise. A regular function can return any value.  Async function also gives a better way of handling error. -->

- What is the difference between Node.js and Express.js?
<!-- 
NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses -->


- What is the error-first callback pattern?
<!-- 
The error-first callback pattern, also known as the Node.js callback pattern or error-first callback style, is a convention used in Node.js for handling asynchronous operations through callbacks. It is a standardized way of passing errors and results to callback functions. -->

- What is middleware?

<!-- These are functions that have access to the request object (req), response object (res), and the next function. They can perform operations on the request and response objects, as well as pass control to the next middleware function in the chain. -->



- What does the `next` function do?
  
  <!-- this is a callback function that is used to pass control from one middleware function to the next middleware function in the chain, or to the final route handler.  -->

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```

<!-- In this code you have to wait for all the async function to load before returning all the values. If you have alot of async values, the performance is not optimized. It also doesn't have the correct error handling. The naming is not good too. It doesn't describe what exactly this function does. 
 -->
