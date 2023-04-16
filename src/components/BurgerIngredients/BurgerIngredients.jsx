import React from 'react';
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerIngredient from '../BurgerIngredient/BurgerIngredient'

function BurgerIngredients(props) {
  const [current, setCurrent] = React.useState('one')
  return (
    <section className={styles.BurgerIngredients}>
      <h1 className={`${styles.header} mt-10 text text_type_main-large`}>Соберите бургер</h1>
      <nav className={`${styles.nav} mt-5`}>
        <Tab value="one" active={current === 'one'} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="two" active={current === 'two'} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="three" active={current === 'three'} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <div className={`${styles.ingredientScroll} custom-scroll`}>
        <h3 className="text text_type_main-medium mt-10">Булки</h3>
        <ul className={styles.ingredient}>
            {props.burgerIngredientsData.data?.map((element) => {
              if (element.type === 'bun') {
                return (
                  <BurgerIngredient className={styles.ingredient} 
                  elementBurgerIngredient={element} key={element._id} 
                  functionOpenPopup={props.functionOpenPopup}
                  functionOnIngredientPopup={props.functionOnIngredientPopup} />
                )
              }
            })
            }
        </ul>
        <h3 className="text text_type_main-medium mt-10">Соусы</h3>
        <ul className={styles.ingredient}>
            {props.burgerIngredientsData.data?.map((element) => {
              if (element.type === 'sauce') {
                return (
                  <BurgerIngredient className={styles.ingredient} 
                  elementBurgerIngredient={element} key={element._id} 
                  functionOpenPopup={props.functionOpenPopup} 
                  functionOnIngredientPopup={props.functionOnIngredientPopup}/>
                )
              }
            })
            }
        </ul>
        <h3 className="text text_type_main-medium mt-10">Начинки</h3>
        <ul className={styles.ingredient}>
            {props.burgerIngredientsData.data?.map((element) => {
              if (element.type === 'main') {
                return (
                  <BurgerIngredient className={styles.ingredient} 
                  elementBurgerIngredient={element} key={element._id} 
                  functionOpenPopup={props.functionOpenPopup} 
                  functionOnIngredientPopup={props.functionOnIngredientPopup}/>
                )
              }
            })
            }
        </ul>
      </div>
    </section>
  );
}

export default BurgerIngredients;
