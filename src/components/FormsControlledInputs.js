import React, { useState } from "react";

const FormsControlledInputs = () => {
	const [firstName, setFirstName] = useState("");
	const [email, setEmail] = useState("");
	const [people, setPeople] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if(firstName && email) {
			console.log('submit form');
		} else {
			console.log('empty value');
		}
	};
	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={firstName}
							placeholder='John Smith'
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email : </label>
						<input
							type='text'
							id='email'
							name='email'
							value={email}
							placeholder='johnsmith@email.com'
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type='submit'>add person</button>
				</form>
			</article>
		</>
	);
};

export default FormsControlledInputs;
