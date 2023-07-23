import Post from './post';
import styles from '../styles/list.module.css';
import Spinner from './spinner';
import React from 'react';

const List = ({ posts }) => {
  return (
    <ul className={styles.container}>
      {posts ? (
        posts.map((item) => <Post key={item.id} {...item} />)
      ) : (
        <Spinner />
      )}
    </ul>
  );
};

const MemoizedList = React.memo(List);
export default MemoizedList;
