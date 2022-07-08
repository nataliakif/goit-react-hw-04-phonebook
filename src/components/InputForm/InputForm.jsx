// import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './InputForm.module.css';

function InputForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState(() => nanoid());

  // const [button, setButton] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return new Error('');
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({ id, name, number });
    resetForm();
  };
  const resetForm = () => {
    setName('');
    setId('');
    setNumber('');
  };

  return (
    <form className={styles['InputForm']} onSubmit={handleFormSubmit}>
      <label className={styles['InputForm__label']}>
        Name
        <input
          className={styles['InputForm__input']}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles['InputForm__label']}>
        Number
        <input
          className={styles['InputForm__input']}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={styles['InputForm__button']} type="submit">
        Add Contact
      </button>
    </form>
  );
}

// InputForm.propTypes = { onSubmit: PropTypes.func.isRequired };
export default InputForm;
