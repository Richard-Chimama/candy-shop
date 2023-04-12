import React, { useEffect, useState } from 'react'

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

     <h1>HELLO WORLD 1234 </h1> 

     <section>
      {
        puns.map(pun => {
          return <article>
            <img src={pun.image} alt='here shoul be iamge'></img>
            <p>{pun.title}</p>
            <p>{pun.price}</p>
            <p>Stock i wil do later</p>
            <button>Add to the card</button>
            <p>In stock</p>
            <p>READ MORE LINK will do later</p>

          </article>
        })

      }
     </section>
    
    </>
  )
}

export default Products