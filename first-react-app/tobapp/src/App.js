import logo from "./logo.svg";
import "./App.css";

function Header(props) {
  const { name, color, fruit, className } = props;
  return (
    <h1 className={className} >
      {name} is {color} like a {fruit}
    </h1>
  );
}

function Footer({ nickname }) {
  return (
    <div>
      <h1>goodbye {nickname}</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Header className="header-tobia" name="Tobia" color="blue" fruit="blueberry" />
      <Header name="Tanya" color="orange" fruit="orange" />
      <Footer nickname="Jimy" />
    </div>
  );
}

export default App;
