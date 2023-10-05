import { Routes, Route, Navigate } from 'react-router-dom';
import DogList from "./DogList";
import FindDogDetails from "./FindDogDetails";

function DogRoutes({dogs}) {
  return (
    <Routes>
      <Route path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<FindDogDetails dogs={dogs} />} />
      <Route path="/*" element={<Navigate to="/dogs" />} />
    </Routes>
  );
}

export default DogRoutes;