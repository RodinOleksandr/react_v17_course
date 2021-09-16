import React from 'react'
import {observer} from 'mobx-react-lite'
import OrderStore from './store/order'
import CardStore from './store/cart'

function ResultScreen(){

  return (
    <main className = 'resultScreen'>
      <h2>Result</h2>
      <hr/>
      <p>Привет, {OrderStore.userName}</p>
      <p>Кол-во заказанных товаров: {CardStore.comnCount}</p>
      <p>Стоимость товаров: {CardStore.total}</p>
    </main>
  );
}

export default observer(ResultScreen)
