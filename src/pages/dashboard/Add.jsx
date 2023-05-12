import { useAuthContext } from '../../context/auth_context';
import { FormRow, FormRowCheckbox, FormRowSelect } from '../../components';

import { nanoid } from 'nanoid';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import {
  addNewJob,
  clearValues,
  editJob,
  handleChange,
} from '../../features/job/jobSlice';
import Wrapper from '../../assets/wrappers/Add';

const Add = () => {
  const { authUser } = useAuthContext();

  const {
    isLoading,
    isEditing,
    jobImageURL,
    jobPosition,
    jobCompany,
    jobSalary,
    jobLocation,
    jobTypeOptions,
    jobType,
    jobModeOptions,
    jobMode,
    jobDescription,
    jobID,
    jobArchived,
  } = useSelector((store) => store.job);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      dispatch(
        editJob({
          jobImageURL,
          jobPosition,
          jobCompany,
          jobSalary,
          jobLocation,
          jobType,
          jobMode,
          jobDescription,
          jobID,
          jobDate: moment().format('L'),
          jobBy: authUser.uid,
          jobArchived,
        })
      );
      return;
    }

    dispatch(
      addNewJob({
        jobImageURL,
        jobPosition,
        jobCompany,
        jobSalary,
        jobLocation,
        jobType,
        jobMode,
        jobDescription,
        jobID: nanoid(),
        jobDate: moment().format('L'),
        jobBy: authUser.uid,
        jobArchived: false,
      })
    );
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    if (name === 'jobArchived') {
      value = e.target.checked;
    }

    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper className="bordered">
      <header>
        <h2 className="title">{isEditing ? 'Edit' : 'Add new'} job</h2>
      </header>
      <form onSubmit={handleSubmit}>
        {isEditing && (
          <FormRowCheckbox
            id="jobArchived"
            title="Is Archived?"
            checked={jobArchived}
            handleChange={handleJobInput}
          />
        )}
        <FormRow
          id="jobPosition"
          title="position"
          type="text"
          required={true}
          value={jobPosition}
          handleChange={handleJobInput}
        />
        <FormRow
          id="jobImageURL"
          title="image URL"
          type="url"
          required={true}
          value={jobImageURL}
          handleChange={handleJobInput}
        />
        <FormRow
          id="jobCompany"
          title="company"
          type="text"
          required={true}
          value={jobCompany}
          handleChange={handleJobInput}
        />
        <FormRowSelect
          id="jobMode"
          title="job mode"
          required={true}
          value={jobMode}
          handleChange={handleJobInput}
          options={[{ value: '', title: 'Please select' }, ...jobModeOptions]}
        />
        <FormRow
          id="jobSalary"
          title="salary ($)"
          type="number"
          step="100"
          required={true}
          value={jobSalary}
          handleChange={handleJobInput}
        />
        <FormRow
          id="jobLocation"
          title="location"
          type="text"
          required={true}
          value={jobLocation}
          handleChange={handleJobInput}
        />
        <FormRowSelect
          id="jobType"
          title="job type"
          required={true}
          value={jobType}
          handleChange={handleJobInput}
          options={[{ value: '', title: 'Please select' }, ...jobTypeOptions]}
        />
        <FormRow
          id="jobDescription"
          title="description"
          type="textarea"
          required={true}
          value={jobDescription}
          handleChange={handleJobInput}
        />
        <div className="buttons-container">
          <button className="btn submit-job" type="submit" disabled={isLoading}>
            Submit
          </button>
          <button
            className="btn btn-hipster reset-form"
            onClick={() => {
              dispatch(clearValues());
            }}
            type="button"
          >
            Reset
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default Add;
