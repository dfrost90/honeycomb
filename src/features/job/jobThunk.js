import { ref, set } from 'firebase/database';
import { db } from '../../firebase';

export const addJobThunk = async (job, thunkAPI) => {
  try {
    await set(ref(db, `storage/${job.jobID}`), job).then(() => {
      window.location.href = '/';
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};

export const editJobThunk = async (job, thunkAPI) => {
  try {
    await set(ref(db, `storage/${job.jobID}`), job).then(() => {
      window.location.href = '/';
    });
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
