import styled from 'styled-components';

const Wrapper = styled.ul`
  display: flex;
  margin: 0;

  li {
    &:not(:first-child) {
      margin-left: 10px;
    }
  }

  img {
    border-radius: 50%;
    display: inline-block;
    height: 40px;
    margin-right: 5px;
    vertical-align: middle;
    width: 40px;
  }

  .nav-user {
    background-color: var(--grey-100);
    border-radius: var(--borderRadius);
    color: var(--white);
    display: inline-block;
    font-size: 20px;
    height: 40px;
    width: 40px;
    padding: 10px;
    text-align: center;
    vertical-align: middle;
  }

  .nav-name {
    display: inline-block;
    font-family: var(--headingFont);
    vertical-align: middle;
    margin-right: 10px;
  }

  .add-job {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 1279px) {
      height: 40px;
      padding: 0;
      width: 40px;
    }

    span {
      @media (max-width: 1279px) {
        display: none;
      }
    }
  }

  .add-job-icon {
    font-size: 18px;
    margin-right: 5px;

    @media (max-width: 1279px) {
      margin-right: 0;
    }
  }
`;

export default Wrapper;
