import React, { useEffect, useState } from 'react'
import Layout from './Layout/Layout'
import { useNavigate,useLocation } from 'react-router-dom';

const Spinner = (path = 'login') => {
    const [count ,setCount] = useState(3)
    const navigate = useNavigate()
    const location = useLocation()

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCount((prevValue) => --prevValue);
        },1000);
        count === 0 && navigate('/login',{
            state:location.pathname
        })
        
        return()=> clearInterval(interval)
    },[count,navigate,location,path])

  return (
   <>
   <h2  style={{color:"#F6C616"}}>Preusmeravamo te za {count} sekundi</h2> 
   <div class="d-flex justify-content-center align-items-center"
   style={{height:"70vh"}}>
    
    <div class="spinner-grow text-warning " role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div>
   </>
  )
}

export default Spinner
