import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
<div className='text-center'>

   <div className="list-group">
    <h3>Admin kontrolna tabla</h3>
        <NavLink to='/dashboard/admin/create-category' className="list-group-item list-group-item-action">Kreiraj kategoriju</NavLink>
        <NavLink to='/dashboard/admin/create-product' className="list-group-item list-group-item-action">Kreiraj proizvod</NavLink>
        <NavLink to='/dashboard/admin/product' className="list-group-item list-group-item-action">Svi proizvodi</NavLink>
        <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action">Porudzbine</NavLink>
        {/*<NavLink to= '/dashboard/admin/users' className="list-group-item list-group-item-action">Korisnici</NavLink>*/}
    </div>
</div>
</>
  )
}

export default AdminMenu
