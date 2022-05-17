import './Contacts.scss';
import { useDispatch } from 'react-redux';
import { delContact, showModal, idForEdit } from 'redux/actions';
import { BiPencil } from 'react-icons/bi';
import { useSelector } from 'react-redux';

export default function Contacts() {
  const contactsList = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const visibleContacts = contactsList.filter(cont =>
    cont.name.toLowerCase().includes(filter.toLowerCase())
  );
  const dispatch = useDispatch();
  const modal = id => {
    dispatch(showModal());
    dispatch(idForEdit(id));
  };

  return (
    <ul className="contacts-list">
      {visibleContacts.map(({ id, name, number }) => (
        <li className="contacts-item" key={id}>
          <p className="contacts-text">
            {name}: {number}
          </p>
          <div className="button-wrap">
            <button
              className="contacts-button"
              onClick={() => dispatch(delContact(id))}
            >
              Delete
            </button>
            <button className="edit-button" onClick={() => modal(id)}>
              <BiPencil />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
