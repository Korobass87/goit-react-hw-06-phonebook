import React from 'react';
import './EditForm.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, changeNumber, showModal } from 'redux/actions';

export default function EditForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const currentID = useSelector(state => state.idEdit);
  const idxForEdit = contacts.indexOf(
    contacts.find(contact => currentID === contact.id)
  );
  const submit = e => {
    e.preventDefault();
    dispatch(showModal());
  };

  return (
    <div className="overlay">
      <div className="modal">
        <form onSubmit={submit}>
          <label>
            Name
            <input
              className="form-input"
              onChange={e =>
                dispatch(changeName({ id: currentID, name: e.target.value }))
              }
              value={contacts[idxForEdit].name}
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
              onChange={e =>
                dispatch(
                  changeNumber({ id: currentID, number: e.target.value })
                )
              }
              value={contacts[idxForEdit].number}
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
