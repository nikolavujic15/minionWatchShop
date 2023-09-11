import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'
import CategoryForm from '../../components/Form/CategoryForm'
import { Modal } from 'antd'

const CreateCategory = () => {
  const [categories, setCategories] = useState([])
  const [name, setName]=useState("")
  const [visible, setVisible] = useState(false);
  const [selected,setSelected]= useState(null)
  const[updateName,setUpdateName] = useState("")

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const {data} =await axios.post("/api/v1/category/create-category", {name})
      if(data?.success){
        console.log(`${name} je kreirana`)
        getAllCategory()
        alert(`${name} kategorija je kreirana`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getAllCategory = async()=>{
    try {
      const {data}=await axios.get("/api/v1/category/get-category")
      if(data?.success){
        setCategories(data?.kategorije)
        console.log(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getAllCategory()
  },[])

  //izmena kategorije
 const handleUpdate = async (e)=> {
e.preventDefault()
try {
  const {data} = await axios.put(`/api/v1/category/update-category/${selected._id}`,{name:updateName})
  if(data.success){
    alert(`${updateName} kategorija izmenjena`)
    setSelected(null);
    setUpdateName('');
    setVisible(false)
    getAllCategory()
  }else{
    alert('Greska u izmeni kategorije')
  }
} catch (error) {
  console.log(error)
}
 }
 //brisanje kategorije
 const handleDelete = async (pId) => {
  try {
    const { data } = await axios.delete(
      `/api/v1/category/delete-category/${pId}`
    );
    if (data.success) {
     alert(`Kategorija obrisana`);

      getAllCategory();
    } else {
      alert ('Greska u brisanju kategorije');
    }
  } catch (error) {
    console.log(error);
  }
};
  return (
    <Layout>
        <div className="container-fluid m-3 p-3 dashboard">
       <div className='row'>
        <div className='col-md-3'>
            <AdminMenu />
        </div>
        <div className='col-md-9'>
           <h2>Upravljanje kategorijama</h2>
          <div className='p-3 w-50' >
            <CategoryForm handleSubmit={handleSubmit} value={name} setValue={setName} />
          </div>
           <div className="w-100">
        <table classname="table-bordered">
          <thead>
            <tr>
              <th className='col-md-4' scope="col">Naziv</th>
              <th className='col-md-4' scope="col">Akcije nad kategorijom</th>
            </tr>
          </thead>
          <tbody>
            
              {categories.map((c)=>(
                <>
                <tr >
                <td key={c.id}>{c.name}</td>
                <td className='col-md-4'><button className='btn btn-primary ms-2'
                onClick={()=>
                 {setVisible(true);setUpdateName(c.name);setSelected(c)}}>
                  Uredi</button></td>
                <td className='col-md-4'><button className='btn btn-primary ms-2 btn-danger'
                onClick={()=>{handleDelete(c._id)}}>
                  Obrisi</button></td>
                </tr>
                </>
              ))}
            
          </tbody>
        </table>


           </div>
           
           <Modal
              onCancel={() => setVisible(false)}
              footer={null}
              visible={visible}
            > 
            <CategoryForm value={updateName} setValue={setUpdateName} handleSubmit={handleUpdate}/>
            </Modal>
        </div>
       </div>
       </div>
    </Layout>
  )
}

export default CreateCategory
