import { useSelector } from 'react-redux';
import Wrapper from '../assets/wrappers/List';
import Job from './Job';
import Loading from './Loading';

const List = () => {
  const { filteredJobs, isLoading } = useSelector((store) => store.allJobs);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs-counter">
        {filteredJobs.length} Job{filteredJobs.length > 1 && 's'}&nbsp;result
        {filteredJobs.length > 1 && 's'}
      </div>
      <div className="jobs-list">
        {filteredJobs.map((item) => {
          return <Job key={item.jobID} {...item} />;
        })}
      </div>
    </Wrapper>
  );
};
export default List;
