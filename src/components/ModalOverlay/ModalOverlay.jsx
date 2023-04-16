import React from 'react';
import { ReactDOM } from 'react';
import styles from './ModalOverlay.module.css';

/* const portal = document.getElementById('portal'); */

function ModalOverlay(props) {
  const {functionClosePopup} = props;
  return (
      <div className={styles.ModalOverlay} onClick={functionClosePopup} >
        {props.children}
      </div>
  );
}

export default ModalOverlay;