import { useState, useEffect } from 'react';
import { getCarts } from '../../utilities/carts-api.js';
import CreateNoteForm from '../../components/CreateNoteForm/CreateNoteForm.jsx';
import ProductList from '../../components/ProductList/ProductList.jsx';

export default function HomePage() {
const [cart, setCarts] = useState(null); //useState //cart matches what I have on my first line in controllers for import Cart from '../../models/cart/cart-model.js and in models where we create the model

useEffect(() => {
    getCarts() //here we invoke that function 
    //now we need to take the data and update state which is setCarts with that data
    .then(data => setCarts(data));
}, []) //we pass this [] as asecond argument to useEffect an empty dependency array because we only want this useEffect code to happen one time

  return (
    <div>
        <CreateNoteForm setCarts={setCarts}/>
        <ProductList cart={cart}/>
    </div>
  )
}
