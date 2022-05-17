import { createAction } from '@reduxjs/toolkit';

export const delContact = createAction('DEL_CONT');
export const addContact = createAction('ADD_CONT');
export const changeFilter = createAction('CHANGE_FILTER');
export const refreshStore = createAction('REFRESH_STORE');
export const editContact = createAction('EDIT_CONTACT');
export const showModal = createAction('SHOW_MODAL');
export const idForEdit = createAction('ID_FOR_EDIT');
export const changeName = createAction('CHANGE_NAME');
export const changeNumber = createAction('CHANGE_NUMBER');
