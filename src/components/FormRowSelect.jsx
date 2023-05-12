import Wrapper from '../assets/wrappers/FormRow';

const FormRowSelect = ({
  id,
  name,
  title,
  options,
  value,
  required,
  handleChange,
}) => {
  return (
    <Wrapper>
      {title && (
        <label htmlFor={id} className="form-label">
          {title}:
        </label>
      )}
      <select
        className="form-select"
        name={name || id}
        id={id}
        value={value}
        required={required}
        onChange={handleChange}
      >
        {options &&
          options.map((option) => {
            return (
              <option key={option.value} value={option.value}>
                {option.title}
              </option>
            );
          })}
      </select>
    </Wrapper>
  );
};
export default FormRowSelect;
