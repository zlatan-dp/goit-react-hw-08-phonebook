import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.contacts.items;

export const selectIsLoading = state => state.contacts.contacts.isLoading;

export const selectError = state => state.contacts.contacts.error;

export const selectFilter = state => state.contacts.filter;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();

    // console.log('Calculating task count');

    return items.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

// export const selectFilteredContact = state => {
//   const allContacts = selectContacts(state);
//   const filter = selectFilter(state);

//   const normalizedFilter = filter.toLowerCase();

//   console.log('Calculating task count');

//   return allContacts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
// };
