import styled from 'styled-components';

const Wrapper = styled.article`
  margin: 15px 0;
  padding: 20px;
  position: relative;
  transition: box-shadow 0.3s 0.1s ease-in;

  &:hover {
    box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.067);
  }

  .archived {
    background-color: var(--white);
    height: 100%;
    left: 0;
    opacity: 0.5;
    position: absolute;
    top: 0;
    user-select: none;
    width: 100%;

    svg {
      font-size: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

  .header {
    display: flex;
    position: relative;
  }

  .title {
    margin-bottom: 5px;

    @media (max-width: 767px) {
      margin-bottom: 10px;
    }

    h5 {
      display: inline-block;
      font-size: 16px;
      margin: 0;
    }
  }

  .edit-job {
    background-color: transparent;
    color: var(--grey-300);
    margin-left: 20px;
    padding: 0;
    position: relative;
    vertical-align: bottom;
    z-index: 1;

    &:hover {
      color: var(--primary-500);
    }
  }

  .info {
    flex: 1 1 auto;
    max-width: calc(100% - 58px);
    padding: 0 20px;

    @media (max-width: 767px) {
      padding: 0 100px 0 10px;
    }

    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 0 80px 0 10px;
    }
  }

  .meta {
    margin-left: auto;
    text-align: right;

    @media (max-width: 1023px) {
      font-size: 12px;
      max-width: 100px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }

  .image {
    height: 48px;
    width: 48px;

    img {
      border-radius: var(--borderRadius);
      display: block;
      object-fit: cover;
      width: 100%;
    }

    @media (max-width: 767px) {
      height: 80px;
      width: 80px;
    }
  }

  .features {
    color: var(--grey-300);
    display: flex;
    flex-flow: row wrap;
    margin: 0;

    @media (max-width: 1023px) {
      font-size: 12px;
    }

    li {
      &:not(:first-child) {
        margin-left: 20px;
        list-style-type: disc;

        @media (max-width: 767px) {
          margin-left: 15px;
        }
      }

      @media (max-width: 767px) {
        flex: 1 1 100%;
        font-size: 14px;
        list-style-type: disc;
        margin-left: 15px;
        margin-top: 5px;
      }
    }
  }

  .type {
    background-color: #fef1e5;
    border-radius: 16px;
    color: #f1b474;
    padding: 4px 12px;

    @media (max-width: 767px) {
      padding: 0 8px;
    }
  }

  .location {
    font-family: var(--headingFont);
    margin-bottom: 5px;

    @media (max-width: 767px) {
      margin: 0;
    }

    svg {
      margin-right: 5px;
    }
  }

  .date {
    color: var(--grey-300);
  }

  .text {
    color: var(--grey-400);
    margin: 20px 0 0;

    @media (max-width: 1023px) {
      font-size: 14px;
      margin: 5px 0 0;
    }

    ul {
      margin: 0;
    }

    li {
      list-style-type: disc;

      &:not(:first-child) {
        margin-top: 5px;
      }
    }
  }
`;

export default Wrapper;
