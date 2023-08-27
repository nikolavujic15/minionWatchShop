import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
    <div className='text-center'>
    
       <div className="list-group">
        <h3>Korisnicka tabla</h3>
            <NavLink to='/dashboard/user/profile' className="list-group-item list-group-item-action">Profil</NavLink>
            <NavLink to='/dashboard/user/orders' className="list-group-item list-group-item-action">Porudzbine</NavLink>
            
        </div>
    </div>
    </>
  )
}

export default UserMenu
