import styled from 'styled-components';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .content {
    padding: 20px 40px;

    @media (max-width: 1279px) {
      padding: 10px 20px;
    }
  }

  .container {
    flex: 1 0 auto;
    margin: 0 auto;
    width: 1280px;
  }

  @media (max-width: 1279px) {
    .container {
      width: 100%;
    }
  }
`;

export default Wrapper;
