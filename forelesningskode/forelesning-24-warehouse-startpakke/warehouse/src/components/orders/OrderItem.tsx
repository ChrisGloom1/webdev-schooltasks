import IOrder from "../../interfaces/IOrder";

const OrderItem = ({id, name, image} : IOrder) => {
  return (
    <article>
      <h3>{name} (id: {id})</h3>
      <img src={`https://localhost:7292/order-images/${image}`} alt=""/>
    </article>
  )
}

export default OrderItem;