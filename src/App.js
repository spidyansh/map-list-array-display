import "./App.css";
import ShowHide from "./ShowHide";

const data = [
  { name: "anshul", age: "30", id: "0" },
  { name: "rahul", age: "10", id: "1" },
  { name: "sanjay", age: "40", id: "2" },
];

const display = data.map((item) =><li>{item.name}</li>);
function App() {
  return (
    <>
      <ul>{display}</ul>
      <ShowHide/>
    </>
  );
}

export default App;
