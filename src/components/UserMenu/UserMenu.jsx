import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operation';
import { UserMenuWrap, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <UserMenuWrap>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </UserMenuWrap>
  );
};
