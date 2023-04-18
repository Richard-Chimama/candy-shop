import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import LocalData from "../LocalData";
import InputComponent from "../components/InputComponent";
import styled from "styled-components";



const Product = () => {
  const [ product, setProduct] = useState({});
  const [InputValue, setInputValue] = useState(1);
  const { cartData, setCartData } = useContext(LocalData);
  const { id } = useParams();
  

 
  

  useEffect(  ()  => {
     fetch(`https://product-api-production-3a61.up.railway.app/products/${id}`)
      .then(response => response.json())
      .then(json => setProduct(json))
  }, [])

  const addToLocalData = (data) => {
    const checkData = cartData.find((item) => item.id === data._id);
    if (checkData == undefined) {
      setCartData((prev) => [
        ...prev,
        {
          id: data._id,
          title: data.title,
          image: data.image,
          price: data.price,
          item: InputValue,
        },
      ]);
    } else {
      setCartData(
        cartData.filter((el) => {
          if (el.id === data._id) {
            el.item += InputValue;
          }
          return el;
        })
      );
    }
  };



/*   

  const handleInputChange = (e, id) => {
    e.preventDefault();
    setInputValue(e.target.value)
    setCartData(
      cartData.filter((el) => {
        if (el.id === id) {
          el.item = InputValue;
        }
        return el;
      })
    );
  }


  const getValue =(id)=>{
    const value = cartData.find((item)=> item.id === id)
    console.log(value)
    if(value == undefined){
      return 1
    }else{
      return value.item
    }
  } 
 */


  
  const handleInputComponent = (data) => {
    setInputValue(data);
  };




  return (
    <div> 
    <Div>
          <Bild src={product.image}   alt="here should be a image" />

      <Kontent>

        
          <content key={product._id}>
              <h2>{product.title}</h2>
              <p>{product.price} SEK</p>
              <p>{product.description}</p>
              <p>Stock:{product.stock}</p>

              <InputComponent onDataReceived={handleInputComponent} />
          <br />
              <br />
              <br />

              <Buton onClick={() => addToLocalData(product)}>Add to cart</Buton> 
              
              <br />
              <br />

            <Link to={"/"}>

               <p> &#129120; Go back</p>

            </Link>

          </content>
     
      </Kontent>


    </Div>

    </div>
  );
};




const Bild = styled.img`
  width: 40%;
  height: 40%;
`;

const Kontent = styled.div`
display: flex;
justify-content: left;
align-items: start;
`;

const Div = styled.div`
display: inline-flex;
align-items: center;
justify-content: space-evenly;`;



const Buton = styled.button`
box-shadow: 0px 0px 10px 0px #eb0ece;
	background-color:#f794e5;
	border-radius:28px;
	border:1px solid #ffffff;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:17px;
	padding:16px 31px;
	text-decoration:none;

&:hover {
  background-color:#de74cb;
}

&:active {
  position:relative;
	top:1px;
`;


export default Product;
