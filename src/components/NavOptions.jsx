import Wrapper from '../assets/wrappers/NavOptions';
import { Link } from 'react-router-dom';
import Search from './Search';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiUser } from 'react-icons/fi';
import { BiExit } from 'react-icons/bi';
import { useAuthContext } from '../context/auth_context';

const NavOptions = () => {
  const { authUser, userSignInWithRedirect, userSignOut } = useAuthContext();

  return (
    <Wrapper>
      <li>
        <Search />
      </li>
      {authUser ? (
        <>
          <li>
            {/* <span className="nav-name">{authUser.displayName}</span> */}
            <img src={authUser.photoURL} alt={authUser.displayName} />
            <button type="button" onClick={userSignOut} className="nav-user">
              <BiExit />
            </button>
          </li>
          <li>
            <Link className="btn add-job" to="add-job">
              <AiOutlinePlus className="add-job-icon" />
              <span>Post a job</span>
            </Link>
          </li>
        </>
      ) : (
        <li>
          <button
            type="button"
            onClick={userSignInWithRedirect}
            className="nav-user"
          >
            <FiUser />
          </button>
        </li>
      )}
    </Wrapper>
  );
};
export default NavOptions;
