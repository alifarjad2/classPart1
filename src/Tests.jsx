function Test(props) {
  console.log(props);
  console.log(props);

  // if (props.prop1 == "1") return "is 1";
  return <p> {props.children} </p>;
}

function Tests() {
  return (
    <>
      <Test
        className="classNAme"
        key="key"
        id="id"
        prop1="2"
        prop2={{ testProp: 2 }}
        prop3={() => {}}
      >
        <p>sa</p>
        sdasd
        <Test />
      </Test>
      <h2></h2>
      <h1> برای تست‌های داخل کلاس </h1>
    </>
  );
}

// console.log(MyFirstComponent());

export default Tests;
