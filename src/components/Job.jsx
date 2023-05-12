import Wrapper from '../assets/wrappers/Job';
import { HiLocationMarker } from 'react-icons/hi';
import { FiEdit, FiArchive } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { setEditJob } from '../features/job/jobSlice';
import { useAuthContext } from '../context/auth_context';
import { Link } from 'react-router-dom';
import { FILTER_JOB_MODES, FILTER_JOB_TYPES } from '../utils/constants';

const Job = ({
  jobImageURL,
  jobCompany,
  jobLocation,
  jobPosition,
  jobSalary,
  jobType,
  jobDescription,
  jobDate,
  jobMode,
  jobID,
  jobBy,
  jobArchived,
}) => {
  const { authUser } = useAuthContext();

  const dispatch = useDispatch();

  const jobTypeTitle = FILTER_JOB_TYPES.map((type) => {
    if (type.value === jobType) {
      return type.title;
    }
  });

  const jobModeTitle = FILTER_JOB_MODES.map((mode) => {
    if (mode.value === jobMode) {
      return mode.title;
    }
  });

  return (
    <Wrapper className="bordered">
      <header className="header">
        <div className="image">
          <img src={jobImageURL} alt={jobCompany} />
        </div>
        <div className="info">
          <div className="title">
            <h5>
              {jobPosition} ({jobModeTitle})
              {authUser?.uid === jobBy && (
                <>
                  <Link
                    type="button"
                    className="btn edit-job"
                    to="/add-job"
                    onClick={() => {
                      dispatch(
                        setEditJob({
                          jobArchived,
                          jobImageURL,
                          jobCompany,
                          jobLocation,
                          jobPosition,
                          jobSalary,
                          jobType,
                          jobDescription,
                          jobMode,
                          jobID,
                        })
                      );
                    }}
                  >
                    <FiEdit />
                  </Link>
                </>
              )}
            </h5>
          </div>
          <ul className="features">
            <li>
              <span className="company-name">{jobCompany}</span>
            </li>
            <li>
              <span className="type">{jobTypeTitle}</span>
            </li>
            <li>
              <span className="salary">${jobSalary}</span>
            </li>
          </ul>
        </div>
        <div className="meta">
          <div className="location">
            <HiLocationMarker />
            <span>{jobLocation}</span>
          </div>
          <div className="date">{jobDate}</div>
        </div>
      </header>
      <div className="text">{jobDescription}</div>
      {jobArchived && (
        <div className="archived">
          <FiArchive />
        </div>
      )}
    </Wrapper>
  );
};
export default Job;
