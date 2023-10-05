import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({dogs}) {
  return (
    <div className="DogList">
      <h1 className="text-center">
        Select a dog to learn more
      </h1>
      <div className="row">
        {dogs.map(dog => (
          <div className="col-3 text-center" key={dog.src}>
            <Link to={`/dogs/${dog.src}`}>
              <h4 className="dog-name">{dog.name}</h4>
              <img src={`/${dog.src}.jpg`} alt={dog.name} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;