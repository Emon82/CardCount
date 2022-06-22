import { useState } from "react";
import "./App.css";

function App() {
  const Product = [
    { name: "PhotoShope", Price: "$99" },
    { name: "Illustrator", Price: "$6.6" },
    { name: "PDF", Price: "$56" },
  ];
  return (
    <header className="App-header">
      <div className="container">
        <p> I am a React Person </p>
        <Counters></Counters>
        <div className="row">
          <Products link="https://www.facebook.com" name={Product[0].name} Price={Product[0].Price}></Products>
          <Products link="https://www.youtube.com" name={Product[1].name} Price={Product[1].Price}></Products>
          <Products link="https://www.twitter.com" name={Product[2].name} Price={Product[2].Price}></Products>
        </div>
      </div>
    </header>
  );
}

function Counters() {
  const [count, setCount] = useState(1);

  const buttonStyle = {
    margin: "10px",
    padding: "5px",
  };
  const decrease = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2> Count: {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        type="button"
        class="btn btn-dark"
        style={buttonStyle}
      >
        Increase
      </button>
      <button
        onClick={decrease}
        type="button"
        class="btn btn-dark"
        style={buttonStyle}
      >
        Decrease{" "}
      </button>
    </div>
  );
}
function Products(props) {
  const ProductStyle = {
    border: "2px solid gray",
    borderRadius: "5px",
    backgroundColor: "lightgray",
    width: "300px",
    height: "300px",
    flot: "left",
    margin: "5px",
    // textAlign: 'center',
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center"
  };
  const buttonSytles={
marginTop:'70px',
  }
  return (
    <div style={ProductStyle} className="col-3">
      <h2>{props.name} </h2>
      <h3> {props.Price}</h3>
      <a href={props.link} type="button" class="btn btn-primary"style={buttonSytles} >Buy Now </a>
    </div>
  );
}

export default App;
