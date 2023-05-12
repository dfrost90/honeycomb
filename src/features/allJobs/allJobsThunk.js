import { child, get, ref } from 'firebase/database';
import { db } from '../../firebase';

export const getAllJobsThunk = async (_, thunkAPI) => {
  const dbRef = ref(db);

  try {
    const jobs = await get(child(dbRef, 'storage')).then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();

        return Object.keys(data).map((library) => ({
          ...data[library],
        }));
      } else {
        console.log('no data');
      }
    });

    return jobs;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
};
