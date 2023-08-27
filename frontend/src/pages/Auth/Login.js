import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useAuth } from "../../context/auth";
import { useLocation, useNavigate } from "react-router-dom";


import "../../styles/AuthStyles.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth,setAuth] = useAuth("")
 

  const navigate = useNavigate();
  const location = useLocation()

  
  const uzmiSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if(res && res.data.success){
        setAuth({
        ...auth,
        user:res.data.user,
        token:res.data.token,
        });
        localStorage.setItem('auth',JSON.stringify(res.data))
        
        console.log('Uspešno prijavljivanje. Preusmeravanje...');
        console.log(res.data.user)
        navigate(location.state || "/");
       
      }
      
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <Layout>
 
      <div className="form-container " style={{ minHeight: "70vh" }}>
        <form onSubmit={uzmiSubmit}>
          <h4 className="title">Uloguj se</h4>

          <div className="mb-3">
            <input
              type="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Unesi Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="******"
              required
            />
          </div>
         <div className="mb-3">
          <button type="submit" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>
    Restart lozinke</button>
    </div>
          <button type="submit" className="btn btn-primary">
            Uloguj se 
          </button>
        </form>
      </div>
      </Layout>
    
  );
};

export default Login;