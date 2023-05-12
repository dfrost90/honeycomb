import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 40px auto;
  max-width: 100%;
  padding: 20px 40px;
  width: 600px;

  header {
    border-bottom: 1px solid var(--borderColor);
  }

  .buttons-container {
    display: flex;
    justify-content: center;
    gap: 20px;

    button {
      max-width: 40%;
      padding: 15px 40px;
    }
  }

  .submit-job {
  }
`;

export default Wrapper;
