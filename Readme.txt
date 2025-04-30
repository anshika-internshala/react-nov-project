React -----> Framework of JavaScript
----> JS Library

JavaScript Library

// Difference between Library & Framework --- 1 HW question
// What is CDN link?
// What is React and ReactDOM ?
// React Elements ---- JS Objects
// What is React JSX?

building a house ----> raw material (hammers , bricks , cements etc)

----> library (React)

drawing room , kitchen , bedroom ----> assemble these things

-----> NextJS (framework)


// Single Page Applications -----> 
new pages are not reloaded ---- existing components are replaced with new ones

// Component-based-structure

// browser ---- converts HTML page into a tree like structure
// tree like structure is called DOM

// React-DOM ---?? When my React code will interact with DOM

// React is a JS library ---- we can use React in existing web pages also
// JSX ----> syntax extension of JS that lets you write "HTML-like" code in JavaScript
// JSX ----> is not directly understood by browser
// Compiles into regular JavaScript by tools like Babel


// npm ---- package manager which contains over 3.1 million packages

// Bundlers -----> compile your React project , create development server
// HMR ---> Hot Module Replacement
// Code optimisation
// Code Minification

// Vite , Webpack , Parcel

// create-react-app  ------> deprecated (webpack)
// vite

// What is package.json ?
// What is the difference between dependencies and devDependencies?
// Difference between package.json and package-lock.json?

// What are components in React?

// Two types of components in React

// Class Based components ---- old way
// Functional Components ---- new way

// Functional component is a simple JS function which returns JSX

// Props --- properties which you pass to any component

// Hooks ---- inbuilt JS functions in React
// "use"

// "useState" Hook ---- creating state variables in React

// local variables ---- var , let , const

// Why do we need keys in React?
// Why we should not use index as keys ?

// useEffect Hook

// API Call ----> client (UI)----- server ------- database (restaurants)

// These API calls are asynchronous operations

// synchronous

// Body component ---> API call ---- 100ms ----- component will rendered

// Body component ----> render component ----> API Call

// useEffect Hook --- gets executed after component is rendered( mounted)

// we should not make unnecessary API calls
// Empty dependency array ----> useEffect code will run only once
// if you have dependency in your dependency array ----> whenever that dependency will change , your useEffect will run

// useMemo Hook --- optimisation purpose

// If my component is doing some expensive calculation , then on every state change
// on every component rerender , this expensive calculation will take place

// We should basically memoise the expensive calculation

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

// Reference Variables ---- local variables , state variables, reference variales
// Ref variables are used for storing the information between re-renders

// Hooks --- JS functions
// Custom Hooks --- ?

// Mounting vs Unmounting

// Mounting ---> component is rendered on DOM
// UnMounting ----> component is removed from DOM

// Routing ----> client side routing , SPA