import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer' >
      <h4 className='text-center'>Student: Nikola Vujic <br></br>Mentor: Dr Vladimir Stanojevic</h4>
      <p className="text-center mt-3">
        <Link to="/about">O nama</Link>|
        <Link to="/contact">Kontakt</Link>
        
      </p>
    </div>
  )
}

export default Footer
