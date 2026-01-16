import {useState } from 'react';
import React from 'react';

function CreateUser() {
	const [full_name, setFullName] = useState('');
	const [email, setEmail] = useState('');

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(full_name,email)
        const userData = {full_name,email}
        // Add user detail to localStorage  
        localStorage.setItem('user',JSON.stringify(userData))
    }


	return (
		<div className='form'>
            <h3>Create New User</h3>
			<form className='form-container'>
				<div className='form-items'>
					<label htmlFor="full_name">Full Name:</label>
					<input
						type="text"
						name="full_name"
						id="full_name"
						value={full_name}
						onChange={(e) => setFullName(e.target.value)}
					/>
				</div>
				<div className='form-items'>
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<div>
					<button onClick={handleSubmit}>Register</button>
				</div>
			</form>
		</div>
	);
}

export default CreateUser;
