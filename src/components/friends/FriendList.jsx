import { css } from 'styled-components';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend_list}>
      <FriendListItem friends={friends} />
    </ul>
  );
};
