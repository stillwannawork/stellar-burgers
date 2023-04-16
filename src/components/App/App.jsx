import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import OrderDetails from '../OrderDetails/OrderDetails';

function App() {
  const urlIngredients = 'https://norma.nomoreparties.space/api/ingredients';
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] =useState(false);
  const [data, setData] = useState([]);

  const getIngredients = () => {
    setIsLoading(true);
    setHasError(false);
    fetch(urlIngredients)
    .then(res => res.json())
    .then(res => {
      setData({data: res.data});
      setIsLoading(false);
    })
    .catch(e => {
      setIsLoading(false);
      setHasError(true);
    });
  }

  useEffect(() => {
    getIngredients();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const closePopup = () => {
    setIsOpen(false);
  }

  const openPopup = () => {
    setIsOpen(true);
  }

  useEffect(() => {
    const closePopupEscKey = (e) => {
      if(e.keyCode === 27){
        closePopup()
      }
    }
    window.addEventListener('keydown', closePopupEscKey)
    return () => window.removeEventListener('keydown', closePopupEscKey)
  },[])

  const [headerText, setHeaderText] = useState('');
  const [modalContent, setModalContent] = useState('');

  const onIngredientPopup = () => {
    setHeaderText('Детали ингредиента')
    setModalContent(<IngredientDetails burgerIngredientsData={data}></IngredientDetails>)
  }

  const onOrderPopup = () => {
    setHeaderText('')
    setModalContent(<OrderDetails></OrderDetails>)
  }

  return (
    <div className={styles.App}>
      <AppHeader />
      <main className={styles.bugerContainer}>
        <BurgerIngredients burgerIngredientsData={data} 
        functionOnIngredientPopup={onIngredientPopup} 
        functionOpenPopup={openPopup} />
        <BurgerConstructor burgerIngredientsData={data}
        functionOnOrderPopup={onOrderPopup}
        functionOpenPopup={openPopup} />
      </main>
      {isOpen && 
      <ModalOverlay functionClosePopup={closePopup} >
          <Modal  functionClosePopup={closePopup} headerText={headerText} >
            {modalContent}
          </Modal>
      </ModalOverlay>}
    </div>
  );
}

export default App;
