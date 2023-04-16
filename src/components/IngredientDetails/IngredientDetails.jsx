import React from "react";
import styles from './IngredientDetails.module.css';

function IngredientDetails(props) {
  /* console.log(props) */
  return (
    <div className={styles.IngredientDetails}>
      <img className={styles.img} src='https://code.s3.yandex.net/react/code/bun-02-large.png' />
      <p className={`${styles.ingredientName} text text_type_main-medium`}>Краторная булка N-200i</p>
      <div className={styles.nutrients}>
        <div className={styles.nutrient}>
          <p className={`text text_type_main-default text_color_inactive`}>Калории, ккал</p>
          <p className={'text text_type_digits-default text_color_inactive'}>420</p>
        </div>
        <div className={styles.nutrient}>
          <p className={`text text_type_main-default text_color_inactive`}>Белки, г</p>
          <p className={'text text_type_digits-default text_color_inactive'}>80</p>
        </div>
        <div className={styles.nutrient}>
          <p className={`text text_type_main-default text_color_inactive`}>Жиры, г</p>
          <p className={'text text_type_digits-default text_color_inactive'}>24</p>
        </div>
        <div className={styles.nutrient}>
          <p className={`text text_type_main-default text_color_inactive`}>Углеводы, г</p>
          <p className={'text text_type_digits-default text_color_inactive'}>53</p>
        </div>
      </div>
    </div>
  )
}

export default IngredientDetails;