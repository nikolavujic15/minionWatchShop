import React from 'react'
import Layout from '../../components/Layout/Layout'
import { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import "../../styles/AuthStyles.css";


const Register = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[phone,setPhone] = useState("")
    const[address,setAddress] = useState("")
    const[answer,setAnswer] = useState("")
    const navigate = useNavigate()


    async function uzmiSubmit(e) {
        e.preventDefault()
        try {
            const res = await axios.post("/api/v1/auth/register",
                { name, email, password, phone, address, answer })

            if (res && res.data.success) {
               // alert('Uspesno ste se registrovali ili vec imate nalog, pokusajte u sekciji ULOGUJ SE')
                navigate('/login')
            }
        } catch (error) {
            console.log(error)
        }

    }
    
  return (
    <Layout>
      <div className='form-container' >
        <h4 className='title'>Registracija</h4>
      <form onSubmit={uzmiSubmit}>
        
  <div className="mb-3">
    <label htmlFor="exampleInputName" className="form-label">Ime</label>
    <input value={name}
    onChange={(e)=> setName(e.target.value)}
     type="text" className="form-control" 
     id="exampleInputEmail1" 
     placeholder='Unesi ime'
     required
      />
    </div>

    <div className="mb-3">
        <label htmlFor="exampleInputEmail" className="form-label">Email</label>
      <input value={email} 
      onChange={(e)=> setEmail(e.target.value)}
      type="email" className="form-control" 
      id="exampleInputEmail2" 
      placeholder='Unesi Email'
      required />


  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Lozinka</label>
    <input value={password}
    onChange={(e)=> setPassword(e.target.value)}
     type="password" className="form-control"
      id="exampleInputPassword1" 
      placeholder='******' 
      required/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPhone" className="form-label">Telefon</label>
    <input value={phone}
    onChange={(e)=> setPhone(e.target.value)}
     type="text" className="form-control"
      id="exampleInputEmail4"
       placeholder='Unesi telefon'
       required />
    </div>

  <div className="mb-3">
    <label htmlFor="exampleInputAdress" className="form-label">Adresa</label>
    <input value={address}
    onChange={(e)=> setAddress(e.target.value)}
     type="text" className="form-control"
      id="exampleInputEmail5" 
      placeholder='Unesi adresu' 
      required/>
    </div>

    <div className="mb-3">
    <input value={answer}
    onChange={(e)=> setAnswer(e.target.value)}
     type="text" className="form-control"
      id="exampleInputEmail5" 
      placeholder='Koji je Vas omiljeni sat' 
      required/>
    </div>

    
  
  <button type="submit" className="btn btn-primary">Potvrdi</button>
</form>

      </div>
    </Layout>
  )
}

export default Register
