import {
  addContact,
  delContact,
  refreshStore,
  changeFilter,
  showModal,
  idForEdit,
  changeName,
  changeNumber,
} from './actions';
import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const contacts = createReducer([], {
  [addContact]: (state, action) => {
    let arrName = state.map(el => el.name.toLowerCase());
    if (arrName.includes(action.payload.name.toLowerCase())) {
      alert(`${action.payload.name} is already in your contacts`);
      return;
    }

    return [action.payload, ...state];
  },
  [delContact]: (state, action) =>
    state.filter(cont => cont.id !== action.payload),
  [refreshStore]: (state, action) => action.payload,
  [changeName]: (state, action) =>
    state.map(obj => {
      if (obj.id === action.payload.id) {
        return { ...obj, name: action.payload.name };
      }
      return obj;
    }),
  [changeNumber]: (state, action) =>
    state.map(obj => {
      if (obj.id === action.payload.id) {
        return { ...obj, number: action.payload.number };
      }
      return obj;
    }),
});

const filter = createReducer('', {
  [changeFilter]: (state, action) => action.payload,
});

const modal = createReducer(false, {
  [showModal]: (state, action) => !state,
});
const idEdit = createReducer('', {
  [idForEdit]: (state, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
  modal,
  idEdit,
});
