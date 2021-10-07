import React from "react";

const FormsControlledInputs = () => {
	return (
		<>
			<article>
				<form className='form'>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input type='text' id='firstName' name='firstName' />
					</div>
				</form>
			</article>
		</>
	);
};

export default FormsControlledInputs;
