import React from 'react';
import styles from './BurgerIngredient.module.css';
import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerIngredient(props) {
  const openIngredientPopup = () => {
    props.functionOpenPopup();
    props.functionOnIngredientPopup();
  }
  return(
    <div className={`${styles.BurgerIngredient} mt-6`} onClick={openIngredientPopup}>
      <Counter count={0} size="default" extraClass="m-1" />
      <img className={styles.imgae} src={props.elementBurgerIngredient.image}/>
      <div className={`${styles.priceContainer} mt-1`}>
        <CurrencyIcon type="primary" />
        <p className='text text_type_digits-default'>{props.elementBurgerIngredient.price}</p>
      </div>
      <p className='text text_type_main-default mt-1'>{props.elementBurgerIngredient.name}</p>
    </div>
  )
}

export default BurgerIngredient;