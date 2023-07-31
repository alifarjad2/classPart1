/***React components are regular JavaScript functions,
 *  but their names must start with a capital letter or they won’t work!
 ***/
function Profile() {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
      alt="Katherine Johnson"
    />
  );
}

//using it
export default function Gallery() {
  return (
    <section>
      <h1>Test first ... </h1>
      <h4>
        The component returns an {"<img />"} tag with src and alt attributes.{" "}
        {"<img />"} is written like HTML, but it is actually JavaScript under
        the hood! This syntax is called JSX, and it lets you embed markup inside
        JavaScript.
      </h4>

      <div className="flexContainer">
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
