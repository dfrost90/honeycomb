import Wrapper from '../assets/wrappers/Header';
import Logo from './Logo';
import NavMenu from './NavMenu';
import NavOptions from './NavOptions';

const Nav = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="header-wrapper">
          <Logo />
          <NavMenu />
          <NavOptions />
        </div>
      </div>
    </Wrapper>
  );
};
export default Nav;
