import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from "axios"
import { useNavigate } from 'react-router-dom'
let DBurl = "http://localhost:4050/furniture"


function Add() {
  let navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      desc: '',
      image: '',
      name: '',
      job: ''

    },
    onSubmit: values => {
      axios.post("http://localhost:4050/furniture", values)
    },
  })

  let [data, setData] = useState([])

  function getData() {
    axios.get(DBurl)
      .then(res => {
        setData(res.data)

      })
  }

  useEffect(() => {
    getData()
  }, [])

  function deleteData(id) {
    let dataId = data.filter(el => el._id !== id)
    setData(dataId)

    // axios.delete(`${DBurl}/${id}`)
    //   .then(() => {
    //     getData()
    //   })
  }



  return (
    <div style={{height:"100vh"}}>
      <form onSubmit={formik.handleSubmit} className='container add-form'>
      <div className='input-wrapper'>
          <label htmlFor="desc">Description</label>
          <input className='border'
            required
            id="desc"
            name="desc"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.desc}
          />
        </div>

        <div className='input-wrapper'>
          <label htmlFor="image">Image</label>
          <input className='border'
            required
            id="image"
            name="image"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image}
          />
        </div>

        <div className='input-wrapper'>
          <label htmlFor="name">Name</label>
          <input className='border'
            required
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </div>

        <div className='input-wrapper'>
          <label htmlFor="job">Job</label>
          <input className='border'
            required
            id="job"
            name="job"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.job}
          />
        </div>

        <button type="submit" onClick={() => navigate("/furniture")} className='submit-btn'>Submit</button>
      </form>

      <table className='container' style={{ marginTop: "50px" }}>
        <thead>
          <tr>
            <th>image</th>
            <th>Name</th>
            <th>Description</th>
            <th>Job</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {
            data && data.map(product => (
              <tr key={product.id}>
                <td><img src={product.image} alt="" style={{ width: "80px", height: "80px", objectFit: "contain" }} /></td>
                <td>{product.name}</td>
                <td>{product.desc}</td>
                <td>{product.job}</td>
                <td><button className='delete-btn' onClick={() => deleteData(product._id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Add
