import React, { useState, useEffect } from 'react';
import { getItems } from '../../utilities/items-api';
import { Link, useNavigate } from 'react-router-dom';


export default function ItemsList({ Item }) {
    const [items, setItems] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getItems()
        .then(res => setItems(res.data))
    }, [])
    console.log(items)

  return (
    <div>
        <ul>
            {items.map((item) =>{
                return(
                    <>
                    <li key={item._id}>
                        <p>
                           <Link to={`/${item._id}`}>{item.name}</Link><br />
                           {item.color}<br /> 
                           {item.qty} <br />
                           {item.price} <br />
                        </p>
                        <button onClick={() => navigate('/carts')}>Add To Cart</button>
                        <button onClick={() => navigate('/items/${item._id}')}>Look At Me</button>
                    </li>
                    </>
                )
            })}
        </ul>
    </div>
  )
}
