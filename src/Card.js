import React , {useState , useRef} from 'react';
import Counter from './Counter';
import './main.css';
import {observer} from 'mobx-react-lite'
import CardStore from './store/cart'



function Card({changePage}){

    let productRows = CardStore.products.map((pr , i) => (
      <tr key = {pr.id} >
        <td>{pr.id}</td>
        <td>{pr.title}</td>
        <td>{pr.price}</td>
        <td>
          <div>
            <Counter min = {1} max = {pr.rest} current = {pr.cnt} onChange = {(val) => CardStore.changeCnt(val , pr.id)}/>
          </div>
        </td>
        <td>{pr.price * pr.cnt}</td>
        <td><button onClick = {() => CardStore.removeItem(pr.id)}>Remove</button></td>
      </tr>
    ));

    return (
      <main>
        <h2>Cart</h2>
        <hr/>
        <table>
          <thead>
						<tr>
							<td>ID</td>
							<td>Title</td>
							<td>Price</td>
							<td>Count</td>
							<td >Total</td>
						</tr>
          </thead>
					<tbody>
						{productRows}
					</tbody>
        </table>
				<hr/>
				<div>Total: {CardStore.total}</div>
        {CardStore.total && <button onClick = {() => changePage ('orderForm')}>Next</button>}
      </main>
    )

}
export default observer(Card);
