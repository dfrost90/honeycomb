import { Link } from 'react-router-dom';
import logo from '../assets/images/honeycomb-logo.png';
import Wrapper from '../assets/wrappers/Logo';

const Logo = () => {
  return (
    <Wrapper>
      <Link className="logo" to="/">
        <img src={logo} alt="honeycomb" />
      </Link>
    </Wrapper>
  );
};
export default Logo;
