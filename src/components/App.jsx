import { lazy } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import { Title, Wrapper } from './App.styled';
// import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Layout } from './Layout/Layout';

const HomePage = lazy(() => import('../pages/Home/Home'));
const RegisterPage = lazy(() => import('../pages/Register/Register'));
const LoginPage = lazy(() => import('../pages/Login/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>

    // <Wrapper>
    //   <Title>Phonebook</Title>
    //   <ContactForm />
    //   <Title>Contacts</Title>
    //   <Filter />
    //   {isLoading && !error && <p>Request in progress...</p>}
    //   <ContactList />
    // </Wrapper>
  );
};
