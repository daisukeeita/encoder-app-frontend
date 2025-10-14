import React, { useContext, useState } from 'react';
import { requestLoginUser } from '../../services/LoginUser';
import { formDataToObject } from '../../utils/formDataToObject';
import { AuthenticationContext } from '../../contexts/AuthenticationContext';
import { useNavigate } from 'react-router';

export const LoginPage = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setIsAuthenticated } = useContext(AuthenticationContext);
  const navigate = useNavigate();


  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const requestBody = formDataToObject(new FormData(event.currentTarget));
      const userData = requestLoginUser(requestBody);

      userData.then(data => {
        localStorage.setItem('isAuthenticated', "true")
        localStorage.setItem('username', data.username)
        localStorage.setItem('role', data.userRole.roleName)
        setIsAuthenticated(localStorage.getItem('isAuthenticated') === "true");
        navigate("/userSection");
      }).catch(error => {
        console.error(error)
      })
  };

  return (
    <div className="box-border min-h-screen min-w-screen flex justify-center items-center">
      <form method='POST' onSubmit={handleSubmit}>
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label className="label">Username</label>
          <input 
            type="text"
            name="username"
            className="input"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <label className="label">Password</label>
          <input 
            type="password" 
            name="plainPassword"
            className="input" 
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />

          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  )
}