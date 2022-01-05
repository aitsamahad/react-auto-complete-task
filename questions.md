1. What is the difference between Component and PureComponent? give an
   example where it might break my app.\
   `PureComponent does shallow comparision on both props and states and re-render if any changes are found. While Component won't compare props and state out of the box which makes it to re-render with any slight change.`

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
   that?\
   `As Context is used to communicate and pass state cross components and shouldComponentUpdate might not take thoses state changes or think of it as a meaningful change and do not re-render which that then leads to unexpected results.`

3. Describe 3 ways to pass information from a component to its PARENT.\
   `By passing a callback function into the child through props, Context API or Redux.`

4. Give 2 ways to prevent components from re-rendering.\
   `React.memo and React.PureComponent are the two ways that prevent needless re-render of the component.`

5. What is a fragment and why do we need it? Give an example where it might
   break my app.\
   `Fragments in React are used to render multiple element but without using an extra DOM node. Fragment doesnt produce any extra elements in DOM, which means the child of the fragment will be rendered without the wrapping DOM node. Fragment can break styles as any styles used on the child of the parent gets passed to the fragment which in the end is removed from the dom.`

6. Give 3 examples of the HOC pattern.\
   `React.memo is a HOC, There are also nested HOC, A HOC that renders different component based on the props that are passed.`

7. what's the difference in handling exceptions in promises, callbacks and
   async...await.\
   `Exceptions in promises can be handled by catch() block, with async/await and callback; exceptions can be handled using try/catch and catching them into the catch block. `

8. How many arguments does setState take and why is it async.\
   `setState takes two arguments, first argument can be an object or a callback and the second argument is a function that is executed after setStat is run. It is an async method because the changes are batched before the component is rerendered with the new state.`

9. List the steps needed to migrate a Class to Function Component.\
   `Change the class to function and remove the extends React.Component, remove constructor, place the content of render into function body, convert all class methods into functions, inline props if any to function declaration and remove 'this' to reference methods or variables.`

10. List a few ways styles can be used with components.\
    `By giving class in 'className', by using global css styles into root css file and by adding inline style using style tag into JSX.`

11. How to render an HTML string coming from the server.\
    `The property called 'dangerouslySetInnerHTML' is used to render the HTML coming from the server, but we must make sure that the data that is coming from the server is trusted and sanitized. For safety purposes we should always sanitized the string on client side aswell to prevent XSS attacks.`
