import styled from 'styled-components';

const Wrapper = styled.main`
  align-items: start;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 20px;

  @media (max-width: 767px) {
    grid-template-columns: auto;
  }
`;

export default Wrapper;
