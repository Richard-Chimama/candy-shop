import React from 'react'
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import styled from 'styled-components'

const Back = styled(Link) `
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    color: #333;
`;

const Title = styled.h1`
  text-align: center;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Textinput = styled.input `
  width: 400px;
  height: 25px;
  border-radius: 5px;
`;

const Textarea = styled.textarea `
  width: 400px;
  border-radius: 10px;
  height: 70px
`;

const CreateDiv = styled.div `
  display: flex; 
  flex-direction: column;
  align-items: center;
  padding: 10px;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const CreateButton = styled.button `
  width: 407px;
  border-radius: 5px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  height: 30px;
  margin: 15px;
  font-size: 15px;
`;

const ImgLabel = styled.label `
  width: 150px;
  margin: 10px;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const BtnDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const ImgDiv = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-left: 50px
`;

const ImgInput = styled.input `
  margin-right: 50px;
  width: 400px;
  border-radius: 5px;
  height: 25px;
`;


export const CreateProduct = () => {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate();

        const handlesubmit = (e) => {
            e.preventDefault();

            let objects = {title, category, price, stock, description}

            try {
              fetch("https://product-api-production-3a61.up.railway.app/products",{
                  method: "POST",
                  headers: {'content-type':'application/json'},
                  body:JSON.stringify(objects)
              })
            } catch (error) {
              console.log(error)
            }

            navigate('/admin/manage-products')
        }
    
  return (
      <div>

        <Title id='create-h1'>Create product</Title>

        <form onSubmit={handlesubmit}>

          <CreateDiv>

                   {/* TITLE */}
            <label>Title:</label>
            <Textinput  
              value={title} 
              onChange={e=>setTitle(e.target.value)} 
              type="text" 
              name="title"
              required
                     />
          </CreateDiv>
                    {/* CATEGORY */}
          <CreateDiv>
              <label>Category:</label>
              <Textinput  
                value={category} 
                onChange={e=>setCategory(e.target.value)}  
                type="text" 
                name="category"
                required
                      />
          </CreateDiv>
                    {/* PRICE */}
          <CreateDiv>
              <label>Price:</label>
              <Textinput  
                value={price} 
                onChange={e=>setPrice(e.target.value)} 
                type="number"  
                name="price"
                required
                      />
          </CreateDiv>
                     {/* STOCK */}
          <CreateDiv>
              <label>Stock:</label>
              <Textinput  
                value={stock} 
                onChange={e=>setStock(e.target.value)} 
                type="number" 
                name="stock"
                required
                      />
          </CreateDiv>
                      
                    {/* DESCRIPTION */} 
          <CreateDiv>
              <label>Description:</label>
              <Textarea 
                value={description} 
                onChange={e=>setDescription(e.target.value)} 
                type="text"  
                name="description"
                rows="12"
                required
                        />
          </CreateDiv>
                    {/* IMAGE INPUT */}
          <ImgDiv>
              <ImgLabel>URL for image:</ImgLabel>
              <ImgInput   
                type="url" 
                className='img-input'
                      />
          </ImgDiv>

          
          <BtnDiv className='create-btns'> 
              <CreateButton type='submit'>Create</CreateButton>
              <Back className='link' to="/admin/manage-products">&#8592; Back </Back>
          </BtnDiv>
        </form>
    </div>
  )
}
export default CreateProduct