import React, {useState} from "react";
import axios from 'axios';
import { setUserSession } from './service/AuthService'


const loginAPIUrl = 'https://z5ocgjae1d.execute-api.us-east-1.amazonaws.com/dev/login';

const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    
    const submitHandler = (event) => {
        event.preventDefault();
        if (email.trim() === '' || password.trim() === '') {
          setErrorMessage('Both email and password are required');
          return;
        }

        setErrorMessage(null);
        const requestConfig = {
        headers: {
            'x-api-key': 'T8oNcYx6C438barL8X489sePlXEZHdI3yQEZusg5'
        }
        }
        const requestBody = {
        email: email,
        password: password
        }

        console.log('Starting the API call')

        axios.post(loginAPIUrl, requestBody, requestConfig).then((response) => {
            setUserSession(response.data.user, response.data.token);
            console.log('Before props method is called')
            props.history.push('/products');
            console.log('After the props method is called')

          }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403 || error.response.status === 402) {
              setErrorMessage(error.response.data.message);
            } else {
              setErrorMessage('sorry....the backend server is down. please try again later!!');
            }
          })
        
        console.log('Login button is pressed')
    }

    return  (
        <div>
        <form onSubmit={submitHandler}>
        <h5>Login</h5>
        email: <input type="text" value={email} onChange={event => setEmail(event.target.value)} /> <br/>
        password: <input type="password" value={password} onChange={event => setPassword(event.target.value)} /> <br/>
        <input type="submit" value="Login" />
      </form>
      {errorMessage && <p className="message">{errorMessage}</p>}
            
        </div>
    ) 
}

export default Login;

/*
Code References:
https://www.youtube.com/watch?v=ReNkQ0Xkccw&t=0s&ab_channel=FelixYu
*/
