import React from 'react';
import styles from './Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

function Modal(props) {
  const {functionClosePopup, headerText} = props;
  return (
    <div className={styles.Modal} onClick={e => e.stopPropagation()}>
      <div className={`${styles.head}`}>
        <h4 className='text text_type_main-large'>{headerText}</h4>
        <CloseIcon type="primary" onClick={functionClosePopup} />
      </div>
      {props.children}
    </div>
  )
} 

export default Modal;
