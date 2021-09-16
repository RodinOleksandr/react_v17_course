import React , {useState , useRef} from 'react';
import useClickOutside from './hooks/useClickOutside'
import styles from './modalWindow.module.css'
export default function () {
  let [isVisible , setIsVisible] = useState(true);
  let el = useRef();
  let close = () => {setIsVisible(false)};
  useClickOutside(el , close);
  return(
    <div>
    {isVisible &&
      <div ref = {el} className = {styles.modalMain}>
        <hr/>
        Modal
        <hr/>
      </div>
    }
    </div>
  )
}
