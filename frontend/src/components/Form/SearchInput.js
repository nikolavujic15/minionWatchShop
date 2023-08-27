import React from 'react'
import { useSearch } from '../../context/search'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SearchInput = () => {
    const [values,setValues]= useSearch()
    const navigate = useNavigate()
  
  const handleSubmit = async(e) =>{
    e.preventDefault()
    try {
        const {data} = await axios.get(`/api/v1/product/search/${values.keyword}`)
        setValues({...values,results:data})
        navigate('/search')
    } catch (error) {
        
    }
  }
     return (
    <div>
       <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input className="form-control me-2" 
        type="search"
         placeholder="Pretrazi..." 
         aria-label="Search"
         onChange={(e)=> setValues({...values,keyword: e.target.value})} />
        <button className="btn btn-outline-warning" type="submit">Pretrazi</button>
      </form>
    </div>
  )
}

export default SearchInput
