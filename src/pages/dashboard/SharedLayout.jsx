import { Outlet } from 'react-router-dom';
import { Header, Footer, Hero } from '../../components';
import Wrapper from '../../assets/wrappers/SharedLayout';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Hero />
      <div className="container">
        <div className="content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};
export default SharedLayout;
