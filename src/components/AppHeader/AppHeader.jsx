import React from 'react';
import styles from'./AppHeader.module.css';
import NavLink from '../NavLink/NavLink';
import {BurgerIcon, ListIcon, ProfileIcon, Logo} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
  return (
    <header className={styles.AppHeader}>
      <div className={styles.navContent}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.leftSide}>
          <NavLink linkText="Конструктор" linkType=""><BurgerIcon type="primary" /></NavLink>
          <NavLink linkText="Лента заказов" linkType="text_color_inactive"><ListIcon type="secondary" /></NavLink>
        </div>
        <div className={styles.rightSide}>
          <NavLink linkText="Личный кабинет" linkType="text_color_inactive"><ProfileIcon type="secondary" /></NavLink>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
