import React from 'react';
import styles from './NavLink.module.css';


type LinkProps = {
  linkText: string;
  linkType: string;
  children: string | JSX.Element | JSX.Element[];
};

const NavLink: React.FunctionComponent<LinkProps> = (props) => {
  const { linkText, linkType, children} = props;

  return (
    <a href="#" className={`${styles.NavLink} pl-5 pr-5`}>
        {props.children}
        <h2 className={`${props.linkType} text text_type_main-default pl-2`}>{props.linkText}</h2>
    </a>
  );
}

export default NavLink;
