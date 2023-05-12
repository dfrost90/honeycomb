import Wrapper from '../assets/wrappers/FormRow';

const FormRow = ({
  id,
  title,
  type,
  value,
  placeholder,
  required,
  handleChange,
  step,
}) => {
  return (
    <Wrapper>
      {title && (
        <label htmlFor={id} className="form-label">
          {title}:
        </label>
      )}
      {(type === 'text' ||
        type === 'email' ||
        type === 'tel' ||
        type === 'number' ||
        type === 'search' ||
        type === 'password' ||
        type === 'url') && (
        <input
          id={id}
          className="form-input"
          name={id}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
          type={type}
          step={step}
        />
      )}

      {type === 'textarea' && (
        <textarea
          id={id}
          name={id}
          className="form-textarea"
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={handleChange}
        />
      )}
    </Wrapper>
  );
};

export default FormRow;
