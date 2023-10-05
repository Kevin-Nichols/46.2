import React, {useState, useEffect} from "react";
import axios from "axios";
import Nav from "./Nav";
import DogRoutes from "./DogRoutes";
import LoadingGif from './gif/loading.gif';
import './App.css';

function App() {

  const [dogs, setDogs] = useState({data: null, isLoading: true});

  useEffect(() => {
    async function getDogs() {
      const res = await axios.get("http://localhost:5001/dogs")
      setDogs({data: res.data, isLoading: false})
    }
    getDogs()
  }, [])

  if(dogs.isLoading) {
    return (
      <div className="loading">
        <h2>Loading</h2>
        <img src={LoadingGif} alt="loading-gif" />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>DogDeets</h1>
      <Nav dogs={dogs.data} />
      <div className="route-list">
        <DogRoutes dogs={dogs.data} />
      </div>
    </div>
  );
}

export default App;
