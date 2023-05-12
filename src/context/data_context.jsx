import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { db } from '../firebase';
import { onValue, ref } from 'firebase/database';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [storage, setStorage] = useState([]);
  const getData = () => {
    const query = ref(db, `storage`);
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const allJobs = Object.keys(data).map((library) => ({
          ...data[library],
        }));
        setStorage(allJobs);
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider
      value={useMemo(() => ({ storage, setStorage }), [storage, setStorage])}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
