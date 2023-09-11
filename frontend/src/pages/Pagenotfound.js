import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import minionnotfound from './404minion.png'

const Pagenotfound = () => {
  return (
    <><img className="pnf-img" src={minionnotfound}></img>
    <Link to="/" className="pnf-btn">
          Go Back
      </Link></>
  )
}

export default Pagenotfound
