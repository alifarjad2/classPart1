/* eslint-disable react/prop-types */
const ashkalList = [
  {
    id: 1,
    shekl: "moraba",
    arz: 130,
    ertefa: 130,
    gheymat: 100
  },
  {
    id: 2,
    shekl: "mostatil",
    arz: 140,
    ertefa: 160,
    gheymat: 65
  },
  {
    id: 3,
    shekl: "moraba",
    arz: 90,
    ertefa: 90,
    gheymat: 43
  },
  {
    id: 4,
    shekl: "moraba",
    arz: 90,
    ertefa: 90,
    gheymat: 43
  },
  {
    id: 5,
    shekl: "mostatil",
    arz: 40,
    ertefa: 160,
    gheymat: 120
  },
]

let count = 0;
export default function Ashkal() {
  ashkalList.sort((shekl1, shekl2) => shekl1.gheymat - shekl2.gheymat)
  // ashkalList.sort((shekl1,shekl2)=> shekl1.shekl > shekl2.shekl ? 1 : -1)

  return <div style={{ width: "90vw", direction: "rtl", display: "flex", gap: "16px", flexDirection: "column" }}>
    {++count}

    {ashkalList.map(shekl => <Shekl key={shekl.id} {...shekl} />)}
  </div>;
}

function Shekl({ id,
  shekl,
  arz,
  ertefa,
  gheymat }) {


  //TODO SORT
  //TODO RADIF

  return <div style={{ display: "flex", width: "100%", gap: "8px" }}>
    <JadvalItem style={{ flex: 0.3 }}>  {id}  </JadvalItem>
    {/* <span className="shekl" style={{flex:0.3}}> {id} </span> */}
    <span className="shekl" style={{ flex: 2 }}> {shekl} </span>
    <span className="shekl" style={{ flex: 1 }}> {arz} </span>
    <span className="shekl" style={{ flex: 1 }}> {ertefa} </span>
    <span className="shekl" style={{ flex: 2 }}> {gheymat} </span>
  </div>

}

function JadvalItem(propsOfItem) {
  return <span className="shekl" {...propsOfItem}> {propsOfItem.children} </span>
}
