import { makeObservable, action, observable, computed } from 'mobx';

class OrderStore{
  formData = [
  							{ lblText : 'Name' , value : '' , type : 'text',  id : 'name'},
  							{ lblText : 'Email' , value : '' , type : 'email',  id : 'email'},
  							{ lblText : 'Phone' , value : '' , type : 'tel',  id : 'tel'}
						 ];

  get isFormsFilled(){
    return this.formData.every( item => item.value.length > 0 );
  }

  get userName(){
    return this.formData.find(f => f.id === 'name').value;
  }

  changeFormData = (id , val) => this.formData.find( f => f.id === id).value =  val;

  constructor(){
    makeObservable(this , {
      formData: observable,
      isFormsFilled: computed,
      userName: computed,
      changeFormData: action
    })
  }

}
 export default new OrderStore
