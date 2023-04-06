import "./App.css";
import { useState } from "react";

function App() {
  const dogWithHat = './dog-hat.jpeg';
  const dogWithoutHat = './dog-no-hat.jpg';
  const [dogPic, setdogPic] = useState(dogWithoutHat);

  return (
    <div className="App">
      <Header title='Dog-Hat-O-Matic' />
      <DogImage dogPic={dogPic}></DogImage>
      <button
        onClick={() =>
          setdogPic(dogPic === dogWithoutHat ? dogWithHat : dogWithoutHat)
        }
      >
        Toggle Hat
      </button>
    </div>
  );
}

export default App;

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const DogImage = (props) => {
  return <img src={props.dogPic} className="dog-image" />;
};