import { Link } from 'react-router-dom';
import styles from '../styles/post.module.css';
import { getDateStr } from '../utils/functions';
import React from 'react';

const Post = ({ title, author, date, id }) => {
  return (
    <li className={styles.item}>
      <Link
        className={styles.link}
        to={{
          pathname: `/post/${id}`,
        }}
      >
        <div className={styles.title}>
          {title.length > 16 ? `${title.slice(0, 16)}...` : title}
        </div>
        <div className={styles.info}>{`${author} | ${getDateStr(date)}`}</div>
      </Link>
    </li>
  );
};

const MemoizedPost = React.memo(Post);
export default MemoizedPost;
