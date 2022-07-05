import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import React from 'react';
import styles from './InputForm.module.css';

class InputForm extends React.Component {
  state = {
    id: nanoid(),
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    return this.setState({ [name]: value });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ id: '', name: '', number: '' });
  };
  render() {
    return (
      <form className={styles['InputForm']} onSubmit={this.handleFormSubmit}>
        <label className={styles['InputForm__label']} htmlFor={this.nameId}>
          Name
          <input
            className={styles['InputForm__input']}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            id={this.id}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={styles['InputForm__label']} htmlFor={this.numberId}>
          Number
          <input
            className={styles['InputForm__input']}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            id={this.numberId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button
          className={styles['InputForm__button']}
          type="submit"
          onClick={this.handleInputChange}
        >
          Add Contact
        </button>
      </form>
    );
  }
}
InputForm.propTypes = { onSubmit: PropTypes.func.isRequired };
export default InputForm;
