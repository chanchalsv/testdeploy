import React, { useState } from 'react'
import Login from "../components/Login";
import Signup from "../components/Signup";

const Authenticate = () => {
  const [active, setActive] = useState("login");
  const handleChange = (type) => {
    setActive(type === "signup" ? "signup" : "login");
  };


  return (
    <div className='authenticate border'>
      {active === "login" ? <Login handleChange={handleChange}/> : <Signup handleChange={handleChange}/>}
    </div>
  )
}

export default Authenticate
