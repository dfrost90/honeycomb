import styled from 'styled-components';

import image from '../../assets/images/hero-background.png';

const Wrapper = styled.section`
  border-bottom: 1px solid var(--borderColor);

  .hero-wrapper {
    background-image: url(${image});
    background-position: 100% 100%;
    background-size: contain;
    background-repeat: no-repeat;
    padding: 40px;

    @media (max-width: 1279px) {
      background: none;
      padding: 20px;
    }
  }
`;

export default Wrapper;
