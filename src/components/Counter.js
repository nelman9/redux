import React from 'react';


const Counter= (props) => {
return(

  <div>
  <p><button onClick={props.didAdd}>Add</button></p>
  <p><button onClick={props.didMinus}>Minus</button></p>
  </div>
 );
}

export default Counter;
