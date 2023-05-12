import styled from 'styled-components';

const Wrapper = styled.footer`
  background: var(--grey-10);

  .footer-wrapper {
    padding: 10px 40px;

    @media (max-width: 1279px) {
      padding: 10px 20px;
    }
  }

  .footer-text {
    color: var(--grey-100);
    max-width: 100%;
    text-align: center;
  }
`;

export default Wrapper;
