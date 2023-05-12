import { createContext, useContext } from 'react';
// import { useDataContext } from './data_context';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  // const { storage: filteredData } = useDataContext();

  return <FilterContext.Provider value={{}}>{children}</FilterContext.Provider>;
};

export const useFilterContext = () => useContext(FilterContext);
