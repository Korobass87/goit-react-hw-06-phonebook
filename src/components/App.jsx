/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { useSelector, useDispatch } from 'react-redux';
import { refreshStore } from 'redux/actions';

import './Styles/App.scss';
import EditForm from './EditForm/EditForm';

export default function App() {
  const contacts = useSelector(state => state.contacts);
  const firstRen = useRef(false);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (firstRen.current) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  useEffect(() => {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localStorage.getItem('contacts') && parsedContacts.length !== 0) {
      dispatch(refreshStore(parsedContacts));
    }

    firstRen.current = true;
  }, []);

  return (
    <div className="container">
      <h2>Phonebook</h2>
      <Phonebook className="Phonebook" />

      <h2>Contacts</h2>

      {contacts.length ? (
        <div className="contacts-wrapper">
          <Filter />
          <Contacts />
        </div>
      ) : (
        <h2>В вашей книге еще нет контактов</h2>
      )}
      {modal && <EditForm />}
    </div>
  );
}
