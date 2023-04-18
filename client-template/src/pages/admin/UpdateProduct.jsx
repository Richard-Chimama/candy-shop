import React, { useState, useEffect } from 'react'
import { useParams, useNavigate, Link, } from 'react-router-dom'
import styled from 'styled-components'
import ShowRoute from '../../components/ShowRoute';
import { motion } from 'framer-motion'
import Colors from '../../Theme';

const Div = styled.div `
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;


const Form = styled.form `
  input,
  textarea,
  button {
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    margin: 10px 0 10px 0;
    border: 0;
  }

  label,
  input,
  textarea,
  button {
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  input,
  textarea {
    border: 2px solid ${Colors.color3} ;  
  }

`;

const BtnsContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const BackLink = styled(Link) `
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  color: #333;
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
          category: update.category,
          price: update.price,
          stock: update.stock,
          description: update.description,
          image: update.image
        }),
      })

      navigate("/admin")

      
    } catch (error) {
      console.log(error)

    }

  }

  return (
    <>
    <ShowRoute route={"/products/admin/update-product"} navigateTO={"/admin"} />
    <Div>

      <Title>Update product</Title>

      {
        <Form onSubmit={handleSubmit}>

          {/* Title */}
          <label>
            Title:

            <input
              value={update.title || ''}
              onChange={event => setUpdate ({...update, title: event.target.value})}
              type='text'
              required 
            />
          </label>

          {/* Title */}
          <label>
            Category:

            <input
              value={update.category || ''}
              onChange={event => setUpdate ({...update, category: event.target.value})}
              type='text'
              required 
            />
          </label>

          {/* Price */}
          <label>
            Price:

            <input
              value={update.price || ''}
              onChange={event => setUpdate({...update, price: event.target.value})}
              type='number'
              min="0"
              max="1000"
              required
            />
          </label> 

          {/* Stock */}
          <label>
            Stock:

            <input
              value={update.stock || ''}
              onChange={event => setUpdate({...update, stock: event.target.value})}
              type='number'
              min="0"
              max="1000"
              required 
            />

          </label>

          {/* Description */}
          <label>
            Description:

            <textarea
              value={update.description}
              onChange={event => setUpdate({...update, description: event.target.value})}
              type='text' 
              rows="12"
              required
            />
          </label>

          <label>
            URL for Image:

            <input
              value={update.image || ''}
              onChange={event => setUpdate ({...update, image: event.target.value})}
              type='url'
              required 
            />
          </label>


          <BtnsContainer>
            <motion.button whileHover={{ scale: 1.01, backgroundColor: Colors.color3, color: Colors.white }}>
              Update
            </motion.button>
          </BtnsContainer>

      </Form>
    }

  </Div>
    </>
  )
  
}

export default UpdateProduct
