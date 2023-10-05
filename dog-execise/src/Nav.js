import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  const dogLinks = dogs.map(dog => (
    <NavLink key={dog.src} to={`/dogs/${dog.src}`}
    >
      {dog.name}
    </NavLink>
  ));

  return (
    <nav>
      <NavLink to="/dogs" end>
        Home Page
      </NavLink>
      {dogLinks}
    </nav>
  );
}

export default Nav;