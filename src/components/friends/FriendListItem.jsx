import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

export const FriendListItem = ({ friend }) => {
  const { avatar, id, isOnline, name } = friend;
  return (
    <li className={css.item} key={id}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isOnline: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};
