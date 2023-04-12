import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'


const Products = () => {
  
  const [puns, setPuns] = useState([]);
  
   

  useEffect (() => {
    fetchData()
  }, [[]])


  const fetchData = async () => {

    try {
      const response  = await fetch ('https://product-api-production-3a61.up.railway.app/products');
      const data = await response.json();
      setPuns(data)
    } catch (error) {
      console.log(data)
    }
  } 



  return (
    <>

     <h1>HELLO WORLD Nikola</h1> 

     <section>

      {

        puns.map(pun => {
          return <article key={pun['_id']}> 

                      <img src={pun.image} alt='here should be a image'></img>
                      <h2>{pun.title}</h2>
                      <p>{pun.price} SEK</p>
                      <input type='number' value="1" /> <br />
                      <button>Add to cart</button>
                      <p>In Stock</p>

                       <Link to={'/product/' + pun['_id'] }>
                          <i>Read more...</i>
                       </Link>

          </article>

        })

      }
     </section>
    
    </>
  )
}

export default Products