import React from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import Layout from '../../components/Layout/Layout'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Product = () => {
    const [products, setProducts] = useState([]);

    //uzima sve proizvode
    const getAllProducts = async () => {
        try {
          const { data } = await axios.get("/api/v1/product/get-product");
          setProducts(data.products);
        } catch (error) {
          console.log(error);
        }
      };

  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="row dashboard">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9 ">
          <h1 className="text-center">Lista svih proizvoda</h1>
          <div className="d-flex flex-wrap">
            {products?.map((p) => (
              <Link
                key={p._id}
                to={`/dashboard/admin/product/${p.slug}`}
                className="product-link"
              >
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">{p.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Product
