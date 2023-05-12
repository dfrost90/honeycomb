import styled from 'styled-components';

const Wrapper = styled.header`
  background: var(--grey-10);
  border-bottom: 1px solid var(--borderColor);
  position: relative;

  .header-wrapper {
    align-items: center;
    display: grid;
    grid-template-columns: auto 1fr auto;
    justify-content: space-between;
    padding: 0 40px;

    @media (max-width: 1279px) {
      padding: 0 20px;
    }

    @media (max-width: 767px) {
      grid-template-columns: auto auto;
      padding: 20px;
    }
  }
`;

export default Wrapper;
