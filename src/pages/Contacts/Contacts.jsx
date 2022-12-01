import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { Title } from './Contacts.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <p>Request in progress...</p>}
      <ContactList />
    </>
  );
}
