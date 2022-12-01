import { useDispatch, useSelector } from 'react-redux';
import { FilterInput, FilterLabel } from './Filter.styled';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { selectFilter } from 'redux/contacts/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const changeFilter = evt => {
    dispatch(filterContacts(evt.target.value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={changeFilter} />
    </FilterLabel>
  );
};
