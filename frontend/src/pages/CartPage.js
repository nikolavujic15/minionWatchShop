import React from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import { useCart } from '../context/cart'
import { useNavigate } from 'react-router-dom'
import DropIn from "braintree-web-drop-in-react";
import axios from 'axios'
import { useState,useEffect } from 'react'

const CartPage = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();
    const [clientToken, setClientToken] = useState("");
    const [instance,setInstance] = useState('')
    const [loading,setLoading] = useState('')

    const navigate = useNavigate();
//Ukupna vrednost korpe
    const totalPrice = () => {
      try {
        let total = 0;
        cart?.map((item) => {
          total = total + item.price;
        });
        return total.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        });
      } catch (error) {
        console.log(error);
      }
    };
// Uklanjanaje iz korpe..
    const removeCartItem = (pid) => {
      try {
        let myCart = [...cart];
        let index = myCart.findIndex((item) => item._id === pid);
        myCart.splice(index, 1);
        setCart(myCart);
        localStorage.setItem("cart", JSON.stringify(myCart));
      } catch (error) {
        console.log(error);
      }
    };

    const getToken = async () => {
      try {
        const { data } = await axios.get("/api/v1/product/braintree/token");
        setClientToken(data?.clientToken);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getToken();
    }, [auth?.token]);
//placanje gpt...
    const handlePayment = async () => {
      try {
        setLoading(true);
        const { nonce } = await instance.requestPaymentMethod();
        const { data } = await axios.post("/api/v1/product/braintree/payment", {
          nonce,
          cart,
        });
        setLoading(false);
        localStorage.removeItem("cart");
        setCart([]);
        navigate("/dashboard/user/orders");
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
  return (
    <Layout>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
            <h1 className="text-center bg-light p-2 mb-1">
                {`Cao,  ${auth?.token && auth?.user?.name}`}
                </h1>
              <h4 className='text-center'>{cart?.length ? `Imate ${cart.length} sata u Vasoj korpi 
              ${auth?.token ? "" : "uloguj se za proveru"}` :
              "Vasa korpa je prazna"}
              </h4>  
            </div>
        </div>
        <div className='row'>
        <div className='col-md-8'>
          {cart?.map((p) => (
                <div className='row mb-2 p-3 card flex-row'>
                  <div className='col-md-4'><img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                    width={'100px'}
                    height={'100px'}
                  /></div>
                  <div className='col-md-8'>
                    <p>{p.name}</p>
                    <p>{p.description.substring(0,30)}</p>
                    <p>Cena : ${p.price}</p>
                    <button className='btn btn-danger' onClick={()=> removeCartItem(p._id)}>Ukloni</button>
                  </div>
                </div>
            ))
           }
        
        </div>
        <div className='col-md-4'>
          <h2>Ukupno vrednost korpe</h2>
          <p>Ukupno | Proveri | Plati</p>
          <hr />
          <h4>Ukupno : {totalPrice()}</h4>
          {
            auth?.user?.address ? (
              <>
              <div className='mb-3'>
                <h4>Adresa</h4>
                <h5>{auth?.user?.address}</h5>
                <button className='btn btn-outline-warning'
                onClick={()=> navigate('/dashboard/user/profile')}> 
                Promeni adresu</button>
              </div>
              </>
            ) : (
              <div className='mb-3'>
                {auth?.token ?(
                  <button className='btn btn-outline-warning'
                  onClick={()=> navigate('/dashboard/user/profile')}> 
                  Promeni adresu</button>
                ):(<button className='btn btn-outline-warning'
                onClick={()=> navigate('/login', {
                state:"/cart",}
                )}>Molim Vas ulogujte se</button>)}
              </div>
            )}
               <div className="mt-2">
                {!clientToken || !auth?.token || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />

                    <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Obrada ...." : "Plati"}
                    </button>
                  </>
                )}
              </div>
        </div>
        </div>
    </div>
    </Layout>
  )
}

export default CartPage
