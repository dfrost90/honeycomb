import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 30px 0;

  .form-label {
    display: block;
    font-size: 18px;
    margin-bottom: 8px;
    text-transform: capitalize;
  }

  .form-textarea {
    min-width: 100%;
    min-height: 100px;
    max-height: 100px;
  }
`;

export default Wrapper;
