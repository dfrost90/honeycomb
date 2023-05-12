import Wrapper from '../assets/wrappers/FormRow';

const FormRowCheckbox = ({ id, title, checked, required, handleChange }) => {
  return (
    <Wrapper className="custom-checkbox">
      <input
        id={id}
        className="form-input"
        name={id}
        checked={checked}
        required={required}
        onChange={handleChange}
        type="checkbox"
      />
      {title && (
        <label htmlFor={id} className="form-label-checkbox">
          {title}
        </label>
      )}
    </Wrapper>
  );
};
export default FormRowCheckbox;
