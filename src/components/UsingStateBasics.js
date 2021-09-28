import React, { useState } from "react";

const UsingStateBasics = () => {
	// console.log(useState('hello world'));
	// const value = useState(1)[0];
	// const handler = useState(1)[1];
	// console.log(value, handler)

	const [data, setData] = useState("State Value");

  const handleClick = () => {
    if (data === 'State Value') {
      setData('Hello, World');
    } else {
      setData('State Value');
    }
  }

	return (
		<>
			<h1>{data}</h1>
      <button className='btn' onClick={handleClick}>
        change title
      </button>
		</>
	);
};

export default UsingStateBasics;