import styled from 'styled-components';

const Wrapper = styled.nav`
  @media (max-width: 767px) {
    display: none;
  }

  ul {
    display: flex;
    justify-content: center;
    margin: 0;
  }

  .nav-link {
    background-color: transparent;
    color: var(--grey-500);
    display: block;
    font-family: var(--navFont);
    padding: 30px 20px;
    position: relative;
    transition: var(--transition);

    &.active,
    &:hover {
      color: var(--primary-500);
    }

    &:hover {
      background: var(--primary-50);
    }

    &::before {
      background-color: var(--primary-500);
      bottom: 0;
      content: '';
      height: 2px;
      left: 50%;
      position: absolute;
      transition: var(--transition);
      transform: translateX(-50%);
      width: 0;
    }

    &.active,
    &:hover {
      &::before {
        width: 50%;
      }
    }
  }
`;

export default Wrapper;
