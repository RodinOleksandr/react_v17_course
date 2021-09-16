import React , { useState, useEffect , useRef } from 'react';
import PropTypes from 'prop-types';

CounterFunc.propTypes = {
    min : PropTypes.number,
    max : PropTypes.number.isRequired,
    current : PropTypes.number,
    onChange : PropTypes.func.isRequired
}
CounterFunc.defaultProps = {
    min : 2
}

function CounterFunc({min , max ,current, onChange}){

  let inp = useRef()
  let updInp = (val) => inp.current.value = val;
  let inc = (isInc) => {
    let val = isInc ? current + 1 : current - 1;
    if (val  <= max && val >= min) {
      onChange(val)
      updInp(val)
    }

  }

  let changeCurrentCount = (event) => {
    let val = isNaN(event.target.value) ? min : Number(event.target.value);
    let checkedVal = Math.max(min, Math.min(val, max));
    onChange(checkedVal)
    updInp(checkedVal)

  }
  useEffect(() => {
    updInp(current)
  } , [current])
  return (
    <div>
      <button onClick = {inc.bind(this , false)} disabled = {current <= min}>-</button>
      <input  ref = {inp} onBlur = {changeCurrentCount} type = 'text' defaultValue = {current} / >
      <button onClick = {inc.bind(this , true)} disabled = { current >= max}>+</button>
    </div>
  )

}



export default CounterFunc;
