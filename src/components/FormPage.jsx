import axios from 'axios'
import React, { useState } from 'react'

const FormPage = () => {
    const [data, setData] = useState({
        

    })
    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/add", data).then((response) => {
            console.log(response.data)
            if (response.data.status == "success") {
                alert("succesfully added")
            } else {
                alert("error")
            }
        }).catch().finally()
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="container">
                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Name</label>
                                    <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Address</label>
                                    <input type="text" className="form-control" name='address' value={data.address} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Phone Number</label>
                                    <input type="text" className="form-control" name='phno' value={data.phno} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Relative Name</label>
                                    <input type="text" className="form-control" name='relativename' value={data.relativename} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Relative Address</label>
                                    <input type="text" className="form-control" name='raddress' value={data.raddress} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Relative No</label>
                                    <input type="text" className="form-control" name='rphno' value={data.rphno} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Relation</label>
                                    <input type="text" className="form-control" name='relation' value={data.relation} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Mode of Transport</label>
                                    <select  id="" className="form-control" name='modeoftransport' value={data.modeoftransport} onChange={inputHandler}>
                                        <option value="select">--select--</option>
                                        <option value="bus">Bus</option>
                                        <option value="train">Train</option>
                                        <option value="flight">Flight</option>
                                    </select>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Destination</label>
                                    <input type="text" className="form-control" name='destination' value={data.destination} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Boarding</label>
                                    <input type="text" className="form-control" name='boarding' value={data.boarding} onChange={inputHandler}/>
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <label htmlFor="" className="form-label">Date</label>
                                    <input type="date" className="form-control" name='date' value={data.date} onChange={inputHandler} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success"onClick={readValue}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormPage