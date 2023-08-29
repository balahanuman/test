import React, { useState } from 'react'
import './styles/Login.css'
const Login = () => {
  const [data,setData] = useState({
    Email :'',
    password :''
  })
  const {Email,password} = data;
  const changeHandler = e => {
    setData ({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e => {
    e.preventDefault()
    console.log(data)
  }

  return (
    <div className='main'>
    <div className='form'>
      <center>
        <form onSubmit={submitHandler}>
         <input style={{margin:'10px',width:'400px',height:'2rem'}} type='Email' name='Email'value={Email} onChange={changeHandler} placeholder='Enter Email'/><br/>
         <input style={{margin:'10px', width:'400px',height:'2rem'}}type='password' name='password'value={password} onChange={changeHandler} placeholder='Enter Password'/><br/>
          <input  className='btn btn-info' type='submit' name='submit'/>
          
        </form>
      </center>
     
    </div>
    <div>
     <img className='img' src='https://tse3.mm.bing.net/th?id=OIP.fR3urUSS6XHCffwLZuwf9QHaDt&pid=Api&P=0&h=180' alt=''/>
     </div>
     </div>
  )
}

export default Login
