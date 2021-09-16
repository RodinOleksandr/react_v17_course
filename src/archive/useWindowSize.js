import { useState , useEffect } from 'react';

function useWindowSize(){
  let [ size , setSize ] = useState(getSize());
  let handler = () => setSize( getSize() );
  useEffect( () => {
    window.addEventListener('resize', handler)
    return () =>{
      window.removeEventListener('resize', handler)
    }
  } , [])
  return size
}

function getSize() {
  return {
    width : window.innerWidth,
    height : window.innerHeight
  }
}

export default useWindowSize;
