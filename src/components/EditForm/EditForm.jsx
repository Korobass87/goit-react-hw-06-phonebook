import React from 'react';
import './EditForm.scss';

export default function EditForm() {
  return (
    <div className="overlay">
      <div className="modal">
        <form>
          <label>
            Name
            <input
              className="form-input"
              //   onChange={()=>{}}
              value=""
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
              //   onChange={}
              value=""
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button className="form-button" type="submit">
            Change
          </button>
        </form>
      </div>
    </div>
  );
}
