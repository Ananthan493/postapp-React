import React from 'react'
import Navbar from './Navbar'

const DeletePost = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="label form-label">ID</label>
                    <input type="text" className="input form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-primary">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeletePost