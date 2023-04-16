import React from "react";
import styles from './OrderDetails.module.css';

function OrderDetails() {
  const image = require('./../../images/done.png')
  return(
    <div className={`${styles.OrderDetails} mt-30 mb-30`}>
      <h4 className={`${styles.orderNumber} text text_type_digits-large mb-8`}>034536</h4>
      <p className={`${styles.p} text text_type_main-medium`}>идентификатор заказа</p>
      <img src={image} alt="Отлично" className={`${styles.img}`} />
      <p className={`${styles.p} text text_type_main-default`}>Ваш заказ начали готовить</p>
      <p className={`${styles.p} text text_type_main-default text_color_inactive`}>Дождитесь готовности на орбитльной станции</p>
    </div>
  )
}

export default OrderDetails;