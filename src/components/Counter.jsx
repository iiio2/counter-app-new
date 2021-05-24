import { Fragment } from 'react';

const Counter = ({ counter, handleIncrement, handleDecrement }) => {
  const increaseCount = (counter) => {
    handleIncrement(counter);
  };

  const decreaseCount = (counter) => {
    handleDecrement(counter);
  };

  return (
    <Fragment>
      <h5>Value: {counter.value === 0 ? 'Zero' : counter.value} </h5>
      <button
        onClick={() => increaseCount(counter)}
        className='btn btn-primary'
      >
        +
      </button>
      <button
        onClick={() => decreaseCount(counter)}
        className='btn btn-secondary'
      >
        -
      </button>
    </Fragment>
  );
};

export default Counter;
