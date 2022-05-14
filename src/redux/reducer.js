import { addContact, delContact, refreshStore, changeFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const intialStore = {
  contacts: [],
  filter: '',
};

export const reducer = createReducer(intialStore, {
  [addContact]: (state, action) => {
    let arrName = state.contacts.map(el => el.name.toLowerCase());
    if (arrName.includes(action.payload.name.toLowerCase())) {
      alert(`${action.payload.name} is already in your contacts`);
      return;
    }

    return { ...state, contacts: [action.payload, ...state.contacts] };
  },
  [delContact]: (state, action) => ({
    ...state,
    contacts: state.contacts.filter(cont => cont.id !== action.payload),
  }),
  [refreshStore]: (state, action) => ({ ...state, contacts: action.payload }),

  [changeFilter]: (state, action) => ({ ...state, filter: action.payload }),
});
