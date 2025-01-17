
import React, { useEffect, useState } from 'react'
import axios from "axios"
let DBurl = "http://localhost:4050/furniture"
import { FaQuoteLeft } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Furniture() {
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


  function handleSortByName() {
    let sortedProducts = data.sort((a, b) => a.name.localeCompare(b.name))
    setData([...sortedProducts])
    console.log(sortedProducts);


  }

  function handleSortByNameReverse() {
    let sortedProducts = data.sort((a, b) => b.name.localeCompare(a.name))
    setData([...sortedProducts])
    console.log(sortedProducts);


  }
  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <div style={{ paddingTop: "150px" }}>
        <p className='prod-title'>Testimonial</p>
        <h1 className='prod-title-2'>Happy Customers</h1>
      </div>

      <div className='container'>
        <button onClick={handleSortByName} className='sort-btn'>A-Z</button>
        <button onClick={handleSortByNameReverse} className='sort-btn'>Z-A</button>
        <button onClick={getData} className='sort-btn'>Reset</button>

        <div className='cards'>
          {data && data.map(product => (
            <div key={product._id} className='card'>
              <div className='quote'><FaQuoteLeft /></div>
              <p className='card-desc'>{product.desc}</p>
              <div className='card-info'>
                <div className='prod-img'><img src={product.image} /></div>
                <div className=''>
                  <p className='card-name'>{product.name}</p>
                  <p className='card-job'>{product.job}</p>
                  <button className='favorites'><FaHeart /></button>
                </div>
              </div>

            </div>
          ))
          }
        </div>

      </div>
    </div>
  )
}

export default Furniture
