import React from 'react'
import { NavLink,Link } from 'react-router-dom'
import minion1 from './minion1.png'
import { useAuth } from '../../context/auth'
import SearchInput from '../Form/SearchInput'
import useCategory from '../../hooks/useCategory'
import { useCart } from '../../context/cart'

function Header() {
  const [auth,setAuth]= useAuth()
  const [cart,setCart]=useCart()
  const categories = useCategory()
  const LogOut = ()=>{
    setAuth({
      ...auth, user:null,token:''
    })
    localStorage.removeItem('auth')
  }
  return (
    <>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        
      <Link  to="/" className="a navbar-brand" ><img src={minion1}></img>MinionWatch Shop</Link>
      <SearchInput/>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <NavLink to="/"  className="a  nav-link" aria-current="page" href="#">Početna</NavLink>
        </li>

        <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to={"/categories"}
                  data-bs-toggle="dropdown"
                >
                 Satovi
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={"/categories"}>
                      Sve kategorije
                    </Link>
                  </li>
                  {categories?.map((c) => (
                    <li>
                      <Link
                        className="dropdown-item"
                        to={`/category/${c.slug}`}
                      >
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

{!auth.user ?(
  <>



   <li className="nav-item">
          <NavLink to="/register"  className="a nav-link nav-link" href="#">Registruj se</NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="/login"  className="a nav-link" href="#">Uloguj se se</NavLink>
        </li>
  </>
):(
  <>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      style={{ border: "none" }}
                    >
                      {auth?.user?.name}
                    </NavLink>
                    <ul className="dropdown-menu">
                      <li>
                        <NavLink
                          to={`/dashboard/${
                            auth?.user?.role === 1 ? "admin" : "user"
                          }`}
                          className="dropdown-item"
                        >
                         Tabla
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={LogOut}
                          to="/login"
                          className="dropdown-item"
                        >
                          Izloguj se
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                </>
              )}

        <li className="nav-item">
          <NavLink to="/cart"  className="a nav-link" href="#">Korpa({cart?.length})
          </NavLink>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>

    </>
  )
}

export default Header
