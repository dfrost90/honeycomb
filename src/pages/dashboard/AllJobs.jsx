import { useDispatch } from 'react-redux';
import Wrapper from '../../assets/wrappers/AllJobs';
import List from '../../components/List';
import Sidebar from '../../components/Sidebar';
import { useEffect } from 'react';
import { getAllJobs } from '../../features/allJobs/allJobsSlice';

const AllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  });
  return (
    <Wrapper>
      <Sidebar />
      <List />
    </Wrapper>
  );
};
export default AllJobs;
