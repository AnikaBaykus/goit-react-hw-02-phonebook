import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

function Filter({ value, onChange }) {
  const inputID = uuidv4();

  return (
    <div>
      <label htmlFor={inputID}>
        Find contacts by name{' '}
        <input
          id={inputID}
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Enter name..."
        />
      </label>
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
