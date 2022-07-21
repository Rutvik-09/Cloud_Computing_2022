import React from "react";
import { useState } from 'react';
import axios from 'axios';

const registerUrl = 'https://z5ocgjae1d.execute-api.us-east-1.amazonaws.com/dev/register';

const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null);

    const submitHandler = (event) => {
        event.preventDefault();
        if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
            setMessage('All fields are required');
            return;
          }
          setMessage(null);
          const requestConfig = {
            headers: {
              'x-api-key': 'T8oNcYx6C438barL8X489sePlXEZHdI3yQEZusg5'
            }
          }
          const requestBody = {
            name: name,
            email: email,
            password: password
          }

    axios.post(registerUrl, requestBody, requestConfig).then(response => {
      setMessage('Registration Successful');
    }).catch(error => {
      if (error.response.status === 401 || error.response.status === 403) 
      {
        setMessage(error.response.data.message);
      } else {
        setMessage('sorry....the backend server is down!! please try again later');
      }
    })

    }
    
    return  (
        <div>
            <form onSubmit={submitHandler}>
        <h5>Register</h5>
        name: <input type="text" value={name} onChange={event => setName(event.target.value)} /> <br/>
        email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} /> <br/>
       
        password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
        <input type="submit" value="Register" />
      </form>
      {message && <p className="message">{message}</p>}
            
        </div>
    )
}

export default Register;

/*
Code References:
https://www.youtube.com/watch?v=ReNkQ0Xkccw&t=0s&ab_channel=FelixYu
*/