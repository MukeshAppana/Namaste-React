// const heading = React.createElement(
//     "h1",
//     {id:"heading",className:"head",xyz:"abc"},
//     "Hello World from React!");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);


// console.log(heading);

//react create element consists of 3 parts. 
// h1 the name of the tag of element we want to create
//{} is ob ject which contains the attributes that we add for the element
//and last one is children 
//all the baove three are props of the React element heading.   

// <script>
// const heading = React.createElement("h1",{},"Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
// </script> 
// instead of writing this react content here we can create a new file with name app.js
// and write the react code in app.js and by this we dont need always to touch our HTML file.


//part4
/*
<div id="parent">
    <div id="child">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>    
    </div>
    <div id="child2>
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>    
    </div>
</div>

*/

//in react syntax for creating nested structures. 
const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag"),
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I'm h1 tag"),
        React.createElement("h2",{},"I'm h2 tag"),
    ])
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);


//JSX halps us to make tagvs in react easy.