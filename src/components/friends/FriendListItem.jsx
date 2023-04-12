import css from './FriendListItem.module.css';

export const FriendListItem = ({ friends }) => {
  return friends.map(({ avatar, id, isOnline, name }) => {
    return (
      <li className={css.item} key={id}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  });
};
