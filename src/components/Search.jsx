import Wrapper from '../assets/wrappers/Search';
import { BsSearch } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { MdClear } from 'react-icons/md';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  clearSearch,
  updateFilters,
  filterJobs,
} from '../features/allJobs/allJobsSlice';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { search } = useSelector((store) => store.allJobs.filters);

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(updateFilters({ name: 'search', value: e.target.value }));
  };

  useEffect(() => {
    dispatch(filterJobs());
  }, [search]);

  return (
    <Wrapper>
      <button
        className={isOpen ? 'search-open' : 'search-open active'}
        type="button"
        onClick={() => setIsOpen(true)}
      >
        <BsSearch />
      </button>
      <div className={isOpen ? 'search-wrapper active' : 'search-wrapper'}>
        <button
          className="search-close"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <BiArrowBack />
        </button>
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <BsSearch className="search-icon" />
          <input
            className="search-input"
            type="search"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
          {search && (
            <button
              type="button"
              className="btn search-clear"
              onClick={() => dispatch(clearSearch())}
            >
              <MdClear />
            </button>
          )}
        </form>
      </div>
    </Wrapper>
  );
};
export default Search;
