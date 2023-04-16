import React from 'react';
import styles from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

function BurgerConstructor(props) {
  const openOrderDetailsPopup = () => {
    props.functionOpenPopup();
    props.functionOnOrderPopup();
  }
  return (
    <section className={`${styles.BurgerConstructor} mt-25`}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <div className={styles.div}></div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
        <ul className={`${styles.ingredientScroll} ${styles.innerUl} custom-scroll`} >
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
          <li className={styles.li}>
            <DragIcon type="primary" />
            <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
            />
          </li>
        </ul>
        <li className={styles.li}>
          <div className={styles.div}></div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
          />
        </li>
      </ul>
      <div className={`${styles.info} mt-10`}>
        <Button htmlType="button" type="primary" size="large" onClick={openOrderDetailsPopup}>
             Оформить заказ
        </Button>
        <div className={styles.price}>
          <p className='text text_type_digits-medium'>510</p>
          <CurrencyIcon className={styles.currency} type="primary" />
        </div>
      </div>
    </section>
  )
}

export default BurgerConstructor;
