import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactItemStyle } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/contacts/selectors';

export const ContactList = () => {
  // const allContacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);
  // const getFilteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return allContacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

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
