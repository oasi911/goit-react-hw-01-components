import css from '../profile/Profile.module.css';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div class="description">
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.name}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.name}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.name}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
