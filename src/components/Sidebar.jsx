import {
  FILTER_JOB_MODES,
  FILTER_JOB_POST_DATES,
  FILTER_JOB_TYPES,
} from '../utils/constants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { Checkbox, CheckboxGroup } from 'rsuite';
import Wrapper from '../assets/wrappers/Sidebar';
import {
  clearFilters,
  updateFilters,
  filterJobs,
} from '../features/allJobs/allJobsSlice';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    datePost,
    type,
    mode,
    salary,
    minSalary,
    maxSalary,
    showArchived,
  } = useSelector((store) => store.allJobs.filters);

  const dispatch = useDispatch();

  const handleFilters = (e, group, value) => {
    if (e === undefined) {
      dispatch(updateFilters({ name: group, value }));
      return;
    }

    if (e.target.name === 'showArchived') {
      dispatch(updateFilters({ name: e.target.name, value: e.target.checked }));
      return;
    }

    dispatch(updateFilters({ name: e.target.name, value: e.target.value }));
  };

  useEffect(() => {
    dispatch(filterJobs());
  }, [datePost, type, mode, salary, showArchived]);

  return (
    <Wrapper className={`${isOpen ? 'bordered open' : 'bordered'}`}>
      <header className="sidebar-header">
        Filter
        <button
          type="button"
          className="clear-filter"
          onClick={() => dispatch(clearFilters())}
        >
          Clear all
        </button>
        <button
          type="button"
          className="toggle-filter"
          onClick={() => setIsOpen(!isOpen)}
        >
          <HiOutlineChevronDown className="toggle-icon" />
        </button>
      </header>
      <div className="filters">
        {/* date post */}
        <div className="filter">
          <div className="filter-title">Date Post</div>
          <select
            name="datePost"
            id="datePost"
            value={datePost}
            onChange={handleFilters}
          >
            {FILTER_JOB_POST_DATES.map((filter) => {
              return (
                <option key={filter.value} value={filter.value}>
                  {filter.title}
                </option>
              );
            })}
          </select>
        </div>

        {/* job type */}
        <div className="filter">
          <div className="filter-title">Job Type</div>
          <CheckboxGroup
            className="filter-list"
            name="type"
            value={type}
            onChange={(value) => handleFilters(undefined, 'type', value)}
          >
            {FILTER_JOB_TYPES.map((filter) => {
              return (
                <Checkbox
                  key={filter.value}
                  className="filter-option"
                  value={filter.value}
                >
                  {filter.title}
                </Checkbox>
              );
            })}
          </CheckboxGroup>
        </div>

        {/* Salary */}
        <div className="filter">
          <div className="filter-title">
            Salary <span className="salary-value">${salary}</span>
          </div>
          <div className="salary">
            <div className="salary-min">${minSalary}</div>
            <div className="salary-max">${maxSalary}</div>
          </div>
          <div className="filter-range">
            <input
              type="range"
              name="salary"
              id="salary"
              step="100"
              min={minSalary}
              max={maxSalary}
              value={salary}
              onChange={handleFilters}
            />
          </div>
        </div>

        {/* on-site/remote */}
        <div className="filter">
          <div className="filter-title">On-site/remote</div>
          <CheckboxGroup
            className="filter-list"
            name="mode"
            value={mode}
            onChange={(value) => handleFilters(undefined, 'mode', value)}
          >
            {FILTER_JOB_MODES.map((filter) => {
              return (
                <Checkbox
                  key={filter.value}
                  className="filter-option"
                  value={filter.value}
                >
                  {filter.title}
                </Checkbox>
              );
            })}
          </CheckboxGroup>
        </div>

        {/* show archived */}
        <div className="filter">
          <label htmlFor="showArchived">
            <span className="filter-title">Show archived</span>
          </label>
          <input
            className="filter-archive-checkbox"
            type="checkbox"
            name="showArchived"
            id="showArchived"
            checked={showArchived}
            onChange={handleFilters}
          />
        </div>
      </div>
    </Wrapper>
  );
};
export default Sidebar;
