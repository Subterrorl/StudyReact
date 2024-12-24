import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';

const MyComponent = () => {
  const { value, setValue } = useContext(MyContext);

  const changeValue = () => {
    setValue("new value");
  };

  return (
    <div>
      <p>Current Value: {value}</p>
      <button onClick={changeValue}>Change Value</button>
    </div>
  );
};

export default MyComponent;
