import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    
    <Layout>
      <div className='row'>
        <div className='col-md-3'>
          <UserMenu />
        </div>
        <div className='col-md-9'>
              <h4> Ime korisnika : {auth?.user?.name}</h4>
              <h4> Email korisnika : {auth?.user?.email}</h4>
              <h4> Adresa korisnika : {auth?.user?.address}</h4>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
