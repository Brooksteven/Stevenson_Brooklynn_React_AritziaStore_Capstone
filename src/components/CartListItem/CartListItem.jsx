export default function CartListItem({ cart }) {
  return (
    <div>
        <h2>{cart.title}</h2>
        <p>{cart.body}</p>
    </div>
  )
}
