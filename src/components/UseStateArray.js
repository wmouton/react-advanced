import React from "react";
import { useState } from "react";
import { data } from "../data";

const UseStateArray = () => {
	const [people, setPeople] = useState(data);
	return (
		<>
			{people.map((person) => {
				const { id, name } = person;
				console.log(person);
				return (
					<div key={id} className='item'>
						<h4>{name}</h4>
					</div>
				);
			})}
		</>
	);
};

export default UseStateArray;