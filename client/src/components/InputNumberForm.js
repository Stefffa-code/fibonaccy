import React, { useState } from 'react';
import axios from 'axios';
import { Button } from './Button';

export function InputNumberForm() {
  const [order, setOrder] = useState(1);
  const [fib, setFib] = useState(1);

  const changeHandler = (event) => {
    let val = +event.target.value;
    val = val === 0 ? 1 : val;
    setOrder(val);
    console.log(order);
  };

  const sendHandler = async () => {
    try {
      const res = await axios.post('/api/fibonacci/send', { order });
      setFib(res.data.fibObj.fibonaccy);
    } catch (e) { console.log(e); }
  };

  return (
    <div>
      <p className="result pink-text">
        ответ:
        <span>
          {' '}
          { fib }
        </span>
      </p>
      <div className="input-field">
        <input
          type="number"
          min="1"
          name="order"
          className="yellow-input fib-input"
          value={order}
          onChange={changeHandler}
        />
        <Button onClick={sendHandler} />
      </div>
    </div>
  );
}
