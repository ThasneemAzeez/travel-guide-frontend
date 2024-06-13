import axios from 'axios'
import React, { useState } from 'react'
import Nav from './Nav'

const Search = () => {
    const[data,setData]=useState({
        "name":"",
    })

    const[result,setResult]=useState([])

    const inputHandler =(event)=>{
        setData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/search",data).then
        ((response)=>{
            console.log(response.data)
            setResult(response.data)
        })
    }
    const deleteCourse=(id)=>{
        let input={"_id":id}
        axios.post("http://localhost:8080/delete",input).then(
            (response)=>{
                if (response.data.status=="success") {
                    alert("deleted sucessfully")
                } else {
                    alert("error")
                }
            }
        )
    }
  return (
    <div>
        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Name</label>
                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                    <button className="btn btn-success" onClick={readValue}>Search</button>
                </div>
                <div className="row g-3">
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
                                            result.map(
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
                                                        <td><button className="btn btn-danger"onClick={()=>{deleteCourse(value._id)}}>Delete</button></td>
                                                        
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
    </div>
  )
}

export default Search