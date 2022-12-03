import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ContactName, ContactPhone, DeleteBtn } from './ContactItem.styled';
import { deleteContact } from 'redux/contacts/operations';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <>
      <ContactName>{name}:</ContactName>
      <ContactPhone>{number}</ContactPhone>
      <DeleteBtn type="button" onClick={handleDelete}>
        Delete
      </DeleteBtn>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
