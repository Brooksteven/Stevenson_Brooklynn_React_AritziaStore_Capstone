import CartListItem from '../CartListItem/CartListItem.jsx'

export default function ProductList({ cart }) {
  return (
    <div>
        {/* if cart exist then go ahead and map over the array */}
        {cart && cart.map(cart => {
            return <CartListItem key={cart._id} cart={cart}/> 
            // use a key to iterate over the array
        })}
    </div>
  );
}
