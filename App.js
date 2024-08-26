// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hi i am Rajat!!!"
// );
// console.log(heading); // heading is an OBJECT
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); // passing heading as a object in using render() method
//  which is used to redner the heading object into root id where DOM redners the root node into the Web Browser

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1",
//     { id: "" },
//     "Hi I m H1 tag"
//   )
// ));

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement(
//       "div",
//       { id: "child" },
//      [ React.createElement("h1",
//       { id: "" },
//       "Hi I m H1 tag"
//     ), React.createElement("h2", {}, "Hi i m h2 tag")]
//   ));
  
//   console.log(parent);
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(parent);



const parent = [React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
     [ React.createElement("h1",
      { id: "" },
      "Hi I m H1 tag"
    ), React.createElement("h2", {}, "Hi i m h2 tag")]
  )),React.createElement(
    "div",
    { id: "parent" },
    React.createElement(
      "div",
      { id: "child" },
     [ React.createElement("h1",
      { id: "" },
      "Hi I m H1 tag"
    ), React.createElement("h2", {}, "Hi i m h2 tag")]
  ))];
  
  console.log(parent);
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);