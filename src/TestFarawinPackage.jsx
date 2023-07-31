//first npm i farawin
import farawin from "farawin";
const { getUsers } = farawin;

const test = () => {
  getUsers((result) => {
    const { userList } = result;
    console.table(userList);

    const stringify = Math.random() > 0.5;
    if (stringify) {
      return (document.getElementById("testFarawin").innerHTML = JSON.stringify(
        userList,
        "",
        2
      ));
    }
    document.getElementById("testFarawin").innerHTML = userList
      .map((user) => Object.values(user).join("\t"))
      .join(" <br />");
  });
};
export default function TestFarawinPackage() {
  return (
    <section>
      <h1>Test Farawin npm package ... </h1>
      <button onClick={test}>test get users and log on console</button>

      <div dir="auto" style={{whiteSpace:"pre-line"}} className="flexContainer" id="testFarawin"></div>
    </section>
  );
}
