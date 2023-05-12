import Wrapper from '../assets/wrappers/Footer';

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="footer-wrapper">
          <p className="footer-text">
            honeycomb © {new Date().getFullYear()} by dfr0st
          </p>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;
