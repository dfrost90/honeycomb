import { configureStore } from '@reduxjs/toolkit';
import allJobsSlice from './features/allJobs/allJobsSlice';
import jobSlice from './features/job/jobSlice';

export const store = configureStore({
  reducer: {
    allJobs: allJobsSlice,
    job: jobSlice,
  },
});
