import PropTypes from 'prop-types';
import styles from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <label className={styles['InputForm__label']} htmlFor={filter}>
      Find contacts by name
      <input
        className={styles['InputForm__input']}
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </label>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
