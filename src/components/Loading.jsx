import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  position: relative;

  span {
    animation: loading 0.6s ease-in-out infinite;
    background-color: var(--grey-100);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    max-width: 20%;
    max-height: 20%;
    transition: background-color 0.3s ease-in-out;
  }

  span:nth-child(2) {
    animation-delay: 0.1s;
  }

  span:nth-child(3) {
    animation-delay: 0.2s;
  }
`;

export default Loading;
