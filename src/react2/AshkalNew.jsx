/* eslint-disable react/prop-types */
import "./Ashkal.css";

const ashkalList = [
  {
    id: 1,
    shekl: "moraba",
    arz: 130,
    ertefa: 130,
    gheymat: 100,
  },
  {
    id: 2,
    shekl: "mostatil",
    arz: 10,
    ertefa: 160,
    gheymat: 65,
  },
  {
    id: 3,
    shekl: "moraba",
    arz: 90,
    ertefa: 90,
    gheymat: 43,
  },
  {
    id: 4,
    shekl: "moraba",
    arz: 90,
    ertefa: 90,
    gheymat: 43,
  },
  // {
  //   id: 5,
  //   shekl: "mostatil",
  //   arz: 40,
  //   ertefa: 160,
  //   gheymat: 120
  // },
];

let count = 0;

export default function AshkalPage() {
  // ashkalList.sort((i1, i2) => i1.gheymat - i2.gheymat)
  ashkalList.sort((i1, i2) => (i1.shekl > i2.shekl ? 1 : -1));

  return (
    <div
      dir="rtl"
      style={{
        padding: 16,
        backgroundColor: "#6f6f6f",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 16,
      }}
    >
      <HeaderItem />
      {/* <ListItem {...firstItem} /> */}

      <input id="input" />
      {++count}

      {!ashkalList.length && <EmptyList />}

      {ashkalList
        .filter((item) => item.shekl == document.getElementById("input"))
        .map((item, index) => (
          <ListItem key={item.id} {...item} index={index} />
        ))}
    </div>
  );
}

function ListItem({ id, shekl, arz, ertefa, gheymat, index }) {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        {index + 1}{" "}
      </span>
      <span className="shekl" style={{ flex: 2 }}>
        {" "}
        {shekl}{" "}
      </span>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        {arz}{" "}
      </span>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        {ertefa}{" "}
      </span>

      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        {(+ertefa * +arz).toLocaleString()}{" "}
      </span>

      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        {(+ertefa + +arz) * 2}{" "}
      </span>

      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        {gheymat}{" "}
      </span>

      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        {((+ertefa + +arz) * 2 * gheymat).toLocaleString()}{" "}
      </span>
    </div>
  );
}

function HeaderItem() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        Radif{" "}
      </span>
      <span className="shekl" style={{ flex: 2 }}>
        {" "}
        Shekl{" "}
      </span>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        Arz{" "}
      </span>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        Ertefa{" "}
      </span>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        Masahat{" "}
      </span>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        Mohit{" "}
      </span>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        Gheymat{" "}
      </span>
      <span className="shekl" style={{ flex: 1 }}>
        {" "}
        Gheymat Kol{" "}
      </span>
    </div>
  );
}

function EmptyList() {
  return <p>List Khalist</p>;
}
