import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactItemStyle } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/contacts/selectors';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContact);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItemStyle key={id}>
          <ContactItem name={name} number={number} id={id} />
        </ContactItemStyle>
      ))}
    </ul>
  );
};
