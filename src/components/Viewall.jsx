import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data,changedata]=useState([])
    const fetchData=()=>{
      axios.get("https://jsonplaceholder.typicode.com/posts").then(
        (response)=>{
          changedata(response.data)
        }
      ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg--12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>User ID</th>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Body</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(

                                        (value,index) => {
                                            return  <tr>
                                    <td>{value.userid}</td>,
                                    <td>{value.id}</td>,
                                    <td>{value.title}</td>,
                                    <td>{value.body}</td>,
                                </tr>
                                        }
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall