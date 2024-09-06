import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { Form } from 'react-router-dom'
import { StoreContext } from '../context/StoreContext';
import axios from "axios";

function LoginPopup({ setShowLogin }) {

    const { url, setToken } = useContext(StoreContext);
    const [currState, setCurrState] = useState("login")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })
    // console.log(url);
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    const onlogin = async (event) => {
        event.preventDefault()
        let newUrl = url;
        if (currState === "login") {
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }
        const  response = await axios.post(newUrl, data)
    
        if(response.data.success){
            setToken(response.data.token);
          localStorage.setItem("token",response.data.token);
          setShowLogin(false)
        //   alert(response.data.token)
        }else{
            alert(response.data.message)
        }
    }
    
    // console.log(newUrl)
    //     useEffect(()=>{
    //   console.log(data)
    //     },[data])
    return (
        <div className='login-popup'>
            <form onSubmit={onlogin} className='login-popup-container'>

                <div className="login-popup-title">
                    <h2>
                        {currState}
                        <p onClick={() => setShowLogin(false)}>x</p>
                    </h2>
                </div>
                <div className="login-popup-inputs">
                    {currState === "login" ? <></> : <input type='text' name='name' value={data.name} onChange={onChangeHandler} placeholder='you name' required />}
                    <input name="email" onChange={onChangeHandler} value={data.email} type='email' placeholder='your email' required />
                    <input name="password" onChange={onChangeHandler} value={data.password} type='password' placeholder='your pass' required />
                </div>

                <button type='submit'>{currState === "Sing Up" ? "create account " : "login "}</button>
                <div className="login-popup-condition">
                    <input type='checkbox' required />
                    <p> by contion i gree to the use & privacy plocity</p>
                </div >
                {currState === "login" ?
                    <p>creata anew accent? <span onClick={() => setCurrState("Sing Up")}> click here </span></p>
                    :
                    <p>arealy have accent? <span onClick={() => setCurrState("login")}> login here </span></p>
                }
            </form>

        </div>
    )
}

export default LoginPopup