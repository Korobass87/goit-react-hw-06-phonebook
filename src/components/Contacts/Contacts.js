import './Contacts.scss';
import { useDispatch } from 'react-redux';
import { delContact } from 'redux/actions';

import { useSelector } from 'react-redux';

export default function Contacts() {
  const contactsList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contactsList.filter(cont =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();

  return (
    <ul className="contacts-list">
      {visibleContacts.map(({ id, name, number }) => (
        <li className="contacts-item" key={id}>
          <p className="contacts-text">
            {name}: {number}
          </p>
          <button
            className="contacts-button"
            onClick={() => dispatch(delContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
