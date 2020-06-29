import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

export type TitleProps = {
  main?: string | React.ReactNode;
  mainLink?: string;
  sub?: string;
  children?: React.ReactNode;
};
export const Title = ({ main, mainLink, children = null, sub }: TitleProps) => {
  let title = children;
  if (main) {
    title = main;
    if (mainLink) {
      title = <NavLink to={mainLink}>{title}</NavLink>;
    }
  }
  let subtitle;
  if (sub) {
    subtitle = (
      <>
        {' '}
        &gt; <span className={styles.subTitle}>{sub}</span>
      </>
    );
  }
  return (
    <h3 id="pageTitle" className={styles.mainTitle}>
      {title}
      {subtitle}
    </h3>
  );
};
