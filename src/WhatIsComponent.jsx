//1- what is jsx

import { Fragment } from "react";

function errorComponent() {
  return <p> didnt start with Upper Case</p>;
}

function ErrorComponent2() {
  // must use try catch or react error bundery
  // return throw "test";
  return null;
}

function ErrorComponent3() {
  function ErrorComponent4() {
    return <p> ErrorComponent4 </p>;
  }

  return (
    <>
      ErrorComponent3
      <ErrorComponent4 />
    </>
  );
}

// error
// function ErrorComponent5() {
//   return <img alt="errorImage">
// }

//jsx roles
function JSXRoles1() {
  //1- cant return 2 element (must return just one root) -> cause function must return just one thing(object here)
  return (
    <Fragment>
      <p> p tag</p>
      <h1> h1 tag</h1>
    </Fragment>
  );
  // can use react fragment for parenting

  return (
    <Fragment>
      <p> p tag</p> <h1> h1 tag</h1>
    </Fragment>
  );
  return (
    <>
      <p> p tag</p> <h1> h1 tag</h1>
    </>
  );
}

//jsx roles
function JSXRoles2() {
  //2- need parantes for multi line

  return; // X
  <Fragment>
    <p> p tag</p> <h1> h1 tag</h1>
  </Fragment>;

  // //correct
  // return (
  //   <Fragment>
  //     <p> p tag</p> <h1> h1 tag</h1>
  //   </Fragment>
  // );
}

//jsx roles
// function JSXRoles3() {
//   //3- need parantes for multi line

//   return;
//   <Fragment>
//     <p> p tag</p> <h1> h1 tag</h1>
//   </Fragment>;
// }

function WhatIsComponent() {
  return (
    <>
      <h1> توصیف رابط کاربر... </h1>
      <h1>
        <a href="https://react.dev/learn/describing-the-ui">React dev site</a>
      </h1>

      <div dir="auto" style={{ display: "flex", gap: "16px", padding: "32px" }}>
        React is a JavaScript library for rendering user interfaces (UI). UI is
        built from small units like buttons, text, and images. React lets you
        combine them into reusable, nestable components. From web sites to phone
        apps, everything on the screen can be broken down into components.
      </div>

      <h4> ۲ نوع دارند </h4>
      <h5> class components </h5>
      <h5> function components </h5>

      <errorComponent />
      <ErrorComponent2 />
      <ErrorComponent3 />

      {/* error and cant build */}
      {/* <ErrorComponent4 /> */}

      {/* error and cant build */}
      {/* <ErrorComponent5 /> */}
    </>
  );
}

//will log Object
console.log("testing call component :) ", WhatIsComponent());
export default WhatIsComponent;
