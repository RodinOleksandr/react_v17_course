import React , {useState} from 'react';
import OrderStore from './store/order';
import {observer} from 'mobx-react-lite';

function OrderForm({changePage}){

  let forms = OrderStore.formData.map((form) => (
      <div key = {form.id}>
        <label htmlFor = {form.id}>{form.lblText}</label>
        <input value = {form.value} onChange = {(e) => OrderStore.changeFormData(form.id , e.target.value)}  type = {form.type} id = {form.id} placeholder = 'Fill the form'/>
      </div>
    ));

  return (
    <main className = 'orderForm'>
      <h2>Order form</h2>
      <hr/>
      {forms}
      <button onClick = {() => changePage ('card')}>Prev</button>
      {OrderStore.isFormsFilled ? <button onClick = {() => changePage ('result')}>Next</button> : null}
    </main>
  );
}

export default observer(OrderForm);
