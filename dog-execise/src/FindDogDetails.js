import React from 'react';
import { useParams } from 'react-router-dom';
import DogDetails from './DogDetails';

function FindDogDetails({dogs}) {
  const {name} = useParams();
  if(name) {
    const curr = dogs.find(
      dog => dog.name.toLowerCase() === name.toLowerCase()
    );
    return <DogDetails dog={curr} />
  }
  return null;
}

export default FindDogDetails;