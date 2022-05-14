import { createAction } from '@reduxjs/toolkit';

export const delContact = createAction('DEL_CONT');
export const addContact = createAction('ADD_CONT');
export const changeFilter = createAction('CHANGE_FILTER');
export const refreshStore = createAction('REFRESH_STORE');
