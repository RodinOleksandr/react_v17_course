import React , {useEffect} from 'react';

export default function(el , fn){

  let handler = (e) => {
    let path = e.path || e.composedPath();
    if(!path.includes(el.current)){
      fn()
    }
  }
  useEffect(()=>{
    document.addEventListener('click' , handler);

    return () => {
      document.removeEventListener('click' , handler)
    }
  })
}
