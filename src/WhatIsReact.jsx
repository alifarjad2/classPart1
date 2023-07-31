function Component1() {
  return <div> Component1 </div>;
}
const Component2 = () => {
  return <div> Component2 </div>;
};

const Component3 = function () {
  return <div> Component3 </div>;
};

function Component4() {
  return <button> Component4 </button>;
}

function Component5() {
  return <input />;
}

function Component6() {
  return null;
}

function WhatIsReact() {
  return (
    <div>
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  );
}

export default WhatIsReact;
