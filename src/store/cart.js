import { makeObservable, action, observable, computed } from 'mobx';
import productFromServer from '../data.js'

class CardStore{

  products = productFromServer

  removeItem = (id) => this.products = this.products.filter( pr => pr.id !== id );
  changeCnt = (cnt, id) => this.products = this.products.map( pr => pr.id !== id ? pr : {...pr , cnt});

  get total(){
    return this.products.reduce(( sum , pr ) =>  pr.price * pr.cnt + sum , 0);
  }
   get comnCnt(){
     return this.products.reduce(( sum , pr ) =>  pr.cnt + sum , 0);
   }
  constructor(){
		makeObservable(this, {
			products : observable,
			total : computed,
			comnCnt : computed,
			removeItem : action,
			changeCnt : action
		})
	}
}

export default new CardStore
