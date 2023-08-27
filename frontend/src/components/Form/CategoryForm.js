import React from 'react'

const CategoryForm = ({handleSubmit,value,setValue}) => {
  return (
    <>
<form onSubmit={handleSubmit}>
    <div className="mb-3">
     
        <input type="text" className="form-control" placeholder='Unesi novu kategoriju'
         value={value} onChange={(e)=>setValue(e.target.value)}/>
           
    </div>
    <button type="submit" className="btn btn-primary">Unesi</button>
</form>

    </>
  )
}

export default CategoryForm
