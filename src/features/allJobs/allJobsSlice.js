import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllJobsThunk } from './allJobsThunk';
import { toast } from 'react-toastify';
import moment from 'moment';

const initialFiltersState = {
  search: '',
  datePost: 'anytime',
  type: [],
  salary: 0,
  minSalary: 0,
  maxSalary: 0,
  mode: [],
  showArchived: false,
};

const initialState = {
  isLoading: true,
  jobs: [],
  filteredJobs: [],
  filters: {
    ...initialFiltersState,
  },
};

export const getAllJobs = createAsyncThunk('allJobs/getJobs', getAllJobsThunk);

const allJobsSlice = createSlice({
  name: 'allJobs',
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    updateFilters: (state, { payload: { name, value } }) => {
      if (name === 'salary') {
        value = Number(value);
      }

      state.filters[name] = value;
    },
    clearSearch: (state) => {
      return {
        ...state,
        filters: {
          ...state.filters,
          search: '',
        },
      };
    },
    clearFilters: (state) => {
      return {
        ...state,
        filters: {
          ...initialFiltersState,
          search: state.filters.search,
          salary: state.filters.maxSalary,
          minSalary: state.filters.minSalary,
          maxSalary: state.filters.maxSalary,
        },
      };
    },
    filterJobs: (state) => {
      const { jobs } = state;
      const {
        search,
        datePost,
        type,
        mode,
        salary,
        showArchived,
      } = state.filters;

      // show all not archived jobs
      let tempJobsFilter = [...jobs].filter((job) => {
        return !job.jobArchived;
      });

      // search
      if (search) {
        tempJobsFilter = tempJobsFilter.filter((job) => {
          return job.jobPosition.toLowerCase().startsWith(search.toLowerCase());
        });
      }

      // type
      if (type.length) {
        tempJobsFilter = tempJobsFilter.filter((job) => {
          return type.includes(job.jobType.toLowerCase().replace(' ', ''));
        });
      }

      // mode
      if (mode.length) {
        tempJobsFilter = tempJobsFilter.filter((job) => {
          return mode.includes(job.jobMode.toLowerCase().replace(' ', ''));
        });
      }

      // date
      if (datePost !== 'anytime') {
        tempJobsFilter = tempJobsFilter.filter((job) => {
          return moment(job.jobDate).isSame(moment(), datePost);
        });
      }

      // show archived (all jobs)
      if (showArchived) {
        tempJobsFilter = [...jobs];
      }

      // salary
      tempJobsFilter = tempJobsFilter.filter((job) => {
        return job.jobSalary <= salary;
      });

      return {
        ...state,
        filteredJobs: tempJobsFilter,
      };
    },
    clearAllJobsState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.jobs = payload;

        let salary = payload.map((job) => {
          return job.jobSalary;
        });
        state.filters.minSalary = Math.min(...salary);
        state.filters.maxSalary = Math.max(...salary);
        state.filters.salary = Math.max(...salary);
      })
      .addCase(getAllJobs.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const {
  showLoading,
  hideLoading,
  updateFilters,
  clearSearch,
  clearFilters,
  filterJobs,
  clearAllJobsState,
} = allJobsSlice.actions;

export default allJobsSlice.reducer;
