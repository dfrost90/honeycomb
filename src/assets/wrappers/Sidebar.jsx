import styled from 'styled-components';

const Wrapper = styled.aside`
  .sidebar-header {
    align-items: center;
    display: flex;
    justify-content: space-between;
    font-family: var(--headingFont);
    padding: 15px 20px;

    @media (max-width: 767px) {
      padding: 10px 20px;
    }
  }
  .clear-filter {
    background: none;
    color: var(--red);
    padding: 0;

    @media (max-width: 767px) {
      margin-left: auto;
      margin-right: 20px;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }
  .toggle-filter {
    background: none;
    border: 1px solid var(--grey-50);
    display: none;
    font-size: 20px;
    height: 40px;
    padding: 0;
    text-align: center;

    width: 40px;

    &:hover {
      background-color: var(--grey-50);
    }

    @media (max-width: 767px) {
      display: inline-block;
    }
  }

  .toggle-icon {
    transform: rotateZ(0);
    transition: var(--transition);
  }

  .filters {
    border-top: 1px solid var(--borderColor);
    padding: 0 20px;

    @media (max-width: 767px) {
      display: none;
    }
  }

  &.open {
    @media (max-width: 767px) {
      .toggle-icon {
        transform: rotateZ(180deg);
      }
      .clear-filter {
        opacity: 1;
      }
      .filters {
        display: block;
      }
    }
  }

  .filter-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 0;
  }
  .filter {
    padding: 20px 0;

    &:not(:last-child) {
      border-bottom: 1px solid var(--borderColor);
    }
  }
  .filter-title {
    font-family: var(--headingFont);
    margin-bottom: 15px;
  }
  .filter-option {
    color: var(--grey-700);
  }
  .filter-range {
    margin-top: 10px;

    input {
      width: 100%;
    }
  }

  .filter-archive-checkbox {
    margin-left: 10px;
  }

  .salary {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }

  .salary-value {
    color: var(--grey-300);
    font-family: var(--bodyFont);
  }
`;

export default Wrapper;
