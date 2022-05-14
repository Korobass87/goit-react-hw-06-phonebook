import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import './Phonebook.scss';

import { addContact } from '../../redux/actions';

function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const nameChange = e => {
    setName(e.target.value);
  };

  const numberChange = e => {
    setNumber(e.target.value);
  };

  const submit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number, id: nanoid() }));
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input
          className="form-input"
          onChange={nameChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          className="form-input"
          onChange={numberChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className="form-button" type="submit">
        {' '}
        Add contact{' '}
      </button>
    </form>
  );
}

export default Phonebook;
