import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addJobThunk, editJobThunk } from './jobThunk';
import { FILTER_JOB_MODES, FILTER_JOB_TYPES } from '../../utils/constants';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  jobImageURL: '',
  jobPosition: '',
  jobCompany: '',
  jobSalary: 500,
  jobLocation: '',
  jobTypeOptions: [...FILTER_JOB_TYPES],
  jobType: '',
  jobModeOptions: [...FILTER_JOB_MODES],
  jobMode: '',
  jobDescription: '',
  jobID: '',
  jobDate: '',
  jobBy: '',
  jobArchived: false,
};

export const addNewJob = createAsyncThunk('jobs/addJob', addJobThunk);
export const editJob = createAsyncThunk('jobs/editJob', editJobThunk);

const jobSlice = createSlice({
  name: 'job',
  initialState,
  reducers: {
    handleChange: (state, { payload: { name, value } }) => {
      state[name] = value;
    },
    clearValues: () => {
      return {
        ...initialState,
      };
    },
    setEditJob: (state, { payload }) => {
      return {
        ...state,
        isEditing: true,
        ...payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNewJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addNewJob.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Job added');
      })
      .addCase(addNewJob.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { handleChange, clearValues, setEditJob } = jobSlice.actions;

export default jobSlice.reducer;
