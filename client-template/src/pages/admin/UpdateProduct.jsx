import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link, } from 'react-router-dom'
import styled from 'styled-components'

const Div = styled.div `
  max-width: 800px;
  margin: 0 auto;
  
`;

const Form = styled.form `
  input,
  textarea,
  button {
    box-sizing: border-box;
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem 0 1rem 0;
  }

`;

const BackLink = styled(Link) `
  text-decoration: none;

`;

const UpdateProduct = () => {
  const [update, setUpdate] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  const fetchUpdate = async () => {
    try {
      const response = await fetch('https://product-api-production-3a61.up.railway.app/products/' + params.id);
      const data = await response.json();
      setUpdate(data)
      
    } catch (error) {
      console.log(error)

    }

  }

  useEffect(() => {
    fetchUpdate()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await fetch('https://product-api-production-3a61.up.railway.app/products/' + params.id, {
        method: 'PATCH', 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: update.title,
          price: update.price,
          stock: update.stock,
          description: update.description,
          image: update.image
        }),
      })

      navigate("/admin/manage-product")

      
    } catch (error) {
      console.log(error)

    }

  }

  return (
    <Div>

      <h1>Update product</h1>

      {
        <Form onSubmit={handleSubmit}>

          {/* Image URL */}
          <label>
            Image

            <input
              value={update.image || ''}
              onChange={event => setUpdate ({...update, image: event.target.value})}
              type='url' 
            />
          </label>

          {/* Title */}
          <label>
            Title

            <input
              value={update.title || ''}
              onChange={event => setUpdate ({...update, title: event.target.value})}
              type='text' 
            />
          </label>

          {/* Price */}
          <label>
            Price

            <input
              value={update.price || ''}
              onChange={event => setUpdate({...update, price: event.target.value})}
              type='text' 
            />
          </label> 

          {/* Stock */}
          <label>
            Stock

            <input
              value={update.stock || ''}
              onChange={event => setUpdate({...update, stock: event.target.value})}
              type='text' 
            />

          </label>

          {/* Description */}
          <label>
            Description

            <textarea
              value={update.description}
              onChange={event => setUpdate({...update, description: event.target.value})}
              type='text' 
              rows="12"
            />
          </label>

          <button>Update</button>
          <BackLink to="/admin">&#8592; Back</BackLink>


      </Form>
    }

  </Div>
  )
  
}

export default UpdateProduct
