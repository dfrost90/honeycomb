import { NavLink } from 'react-router-dom';
import Wrapper from '../assets/wrappers/NavMenu';

const NavMenu = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            to="/"
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
      </ul>
    </Wrapper>
  );
};
export default NavMenu;
