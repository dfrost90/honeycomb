import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;

  .search-wrapper {
    @media (max-width: 1279px) {
      align-items: center;
      justify-content: center;
      grid-template-columns: auto 1fr;
      background-color: var(--grey-10);
      display: none;
      padding: 0 20px;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
    }
  }

  .search-wrapper.active {
    @media (max-width: 1279px) {
      display: grid;
    }
  }

  .search-form {
    display: block;
    height: 40px;
    position: relative;
  }

  .search-icon {
    color: var(--grey-300);
    position: absolute;
    top: 50%;
    transform: translate(11px, -50%);
  }

  .search-input {
    padding-left: 32px;
  }

  .search-open {
    background: transparent;
    color: var(--primary-500);
    display: none;
    height: 40px;
    padding: 0;
    width: 40px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--primary-100);
    }

    @media (max-width: 1279px) {
      display: block;
    }
  }

  .search-close {
    background: transparent;
    color: var(--grey-300);
    display: none;
    height: 40px;
    margin-right: 10px;
    padding: 0;
    width: 40px;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: var(--grey-100);
    }

    @media (max-width: 1279px) {
      display: block;
    }
  }

  .search-clear {
    background: transparent;
    border-radius: 0 var(--borderRadius) var(--borderRadius) 0;
    color: var(--grey-300);
    height: 100%;
    top: 0;
    padding: 0;
    position: absolute;
    right: 0;
    text-align: center;
    width: 40px;

    &:hover {
      background: var(--grey-100);
    }
  }
`;

export default Wrapper;
