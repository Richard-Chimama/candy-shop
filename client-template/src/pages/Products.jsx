import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'


const Products = () => {
  
  const [candys, setCandy] = useState([]);


/*    

  const { cartData, setCartData } = useContext(LocalData);
  const [ InputValue, setInputValue] = useState ("1")  
  
  */
   

  useEffect (() => {
    fetchData()
  }, [[]])


  const fetchData = async () => {

    try {
      const response  = await fetch ('https://product-api-production-3a61.up.railway.app/products');
      const data = await response.json();
      setCandy(data)
    } catch (error) {
      console.log(data)
    }
  } 

/*    
    const addToCard = (data) => {
    const num = Math.floor(Math.random = 1000)
    setCartData((prevData) => [...prevData, {
      id:num,
      title: data.title,
      image: data.image,
      price: data. price,
      item: 1
    }])


   */



  return (
    <>

     <h1>Hello World </h1> 

     <section>

      {

        candys.map(candy => {
          return <article key={candy['_id']}> 

                      <img src={candy.image} alt='here should be a image'></img>
                      <h2>{candy.title}</h2>
                      <p>{candy.price} SEK</p>
                      <input type='number' value="1"/> <br />
                      <button>Add to cart</button>
                      <p>In Stock</p>

                       <Link to={'/product/' + candy['_id'] }>
                          <i>Read more...</i>
                       </Link>

          </article>

        })

      }
     </section>
    
    </>
  )
}


export default Products;