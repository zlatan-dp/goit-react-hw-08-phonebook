import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import { contactsReducer } from './contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
});
