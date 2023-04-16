import React from 'react'
import '../../Create.css'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export const CreateProduct = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")

    const navigate = useNavigate();

        const handlesubmit = (e) => {
            e.preventDefault();

            let objects = {title, category, price, stock, description, image}

            try {
              fetch("https://product-api-production-3a61.up.railway.app/products",{
                  method: "POST",
                  headers: {'content-type':'application/json'},
                  body:JSON.stringify(objects)
              })
            } catch (error) {
              console.log(error)
            }

            navigate('/admin')
        }
    
  return (
      <div id='create-container'>

        <h1 id='create-h1'>Create product</h1>

        <form onSubmit={handlesubmit}>

          <div className='create-div'>
            <label>Title:</label>
            <input  value={title} 
                    onChange={e=>setTitle(e.target.value)} 
                    type="text"
                    className='input' 
                    name="title"
                    required
                     />
          </div>

          <div className='create-div'>
              <label>Category:</label>
              <input  value={category} 
                      onChange={e=>setCategory(e.target.value)}  
                      type="text"
                      className='input'  
                      name="category"
                      required
                      />
          </div>

          <div className='create-div'>
              <label>Price:</label>
              <input  value={price} 
                      onChange={e=>setPrice(e.target.value)} 
                      type="number"
                      className='input'  
                      name="price"
                      required
                      />
          </div>

          <div className='create-div'>
              <label>Stock:</label>
              <input  value={stock} 
                      onChange={e=>setStock(e.target.value)} 
                      type="number"
                      className='input'  
                      name="stock"
                      required
                      />
          </div>
                      
          <div className='create-div'>
              <label>Description:</label>
              <textarea value={description} 
                        onChange={e=>setDescription(e.target.value)} 
                        type="text"  
                        name="description"
                        rows="12"
                        required
                        />
          </div>

          <div className='create-div'>
              <label  className='img-label'>Image link:</label>
              <input  type="text" 
                      className='input'
                      id="avatar"
                      name="avatar" 
                      value={image}
                      onChange={e=>setImage(e.target.value)}
                      />
          </div>

          
          <div className='create-btns'> 
              <button id='create-button' type='submit'>Create</button>
              <Link className='link' to="/admin">&#8592; Back </Link>
          </div>
        </form>
    </div>
  )
}
export default CreateProduct