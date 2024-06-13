import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewall = () => {
    const[data,setData]=useState([])
    const fetchData=()=>{

        axios.get("http://localhost:8080/view",data).then(
            (response)=>{
                setData(response.data)
            }
        ).catch().finally()
    }
    useEffect(()=>{fetchData()},[])
    

  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone Number</th>
                                            <th scope="col">Relative Name</th>
                                            <th scope="col">Relative Address</th>
                                            <th scope="col">Relation</th>
                                            <th scope="col">mode of transport</th>
                                            <th scope="col">Destination</th>
                                            <th scope="col">Boarding</th>
                                            <th scope="col">Date</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map(
                                                (value, index) => {
                                                    return <tr>
                                                        <th scope="row">{value.name}</th>
                                                        <td>{value.address}</td>
                                                        <td>{value.phno}</td>
                                                        <td>{value.relativename}</td>
                                                        <td>{value.raddress}</td>
                                                        <td>{value.rphno}</td>
                                                        <td>{value.modeoftransposrt}</td>
                                                        <td>{value.destination}</td>
                                                        <td>{value.boarding}</td>
                                                        <td>{value.date}</td>
                                                        
                                                        
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