import React , {  useState } from 'react'
import Card from './Card.js'
import OrderForm from './OrderForm.js'
import ResultScreen from './ResultScreen.js'

function App(){
	//route

	let [ activePage , setActivePage ] = useState('card');
	let changePage = (page) => setActivePage(page);

	return (
		<>
			{activePage == 'card' && <Card  changePage = {changePage}/>}
			{activePage == 'orderForm' && <OrderForm  changePage = {changePage}/>}
			{activePage == 'result' && <ResultScreen />}
			
		</>
	)
}
  export default App;
