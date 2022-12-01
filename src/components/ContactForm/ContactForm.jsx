// import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
import { selectContacts } from 'redux/contacts/selectors';
import {
  AddBtn,
  ContactFormInput,
  ContactFormLabel,
  ContactFormWrap,
} from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const nameCheck = name => {
      const normalizedName = name.toLowerCase();
      const checked = contacts.find(
        contact => contact.name.toLowerCase() === normalizedName
      );
      if (checked) return checked.name;
    };

    const newContact = {
      name,
      number,
    };

    if (nameCheck(name)) return alert(`${name} is already in contacts`);

    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <ContactFormWrap onSubmit={handleSubmit}>
      <ContactFormLabel>
        Name
        <ContactFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </ContactFormLabel>
      <ContactFormLabel>
        Phone
        <ContactFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </ContactFormLabel>
      <AddBtn type="submit">Add contact</AddBtn>
    </ContactFormWrap>
  );
};
