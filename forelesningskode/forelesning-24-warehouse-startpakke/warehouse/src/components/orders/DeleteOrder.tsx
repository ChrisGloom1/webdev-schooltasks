import { useState, useContext, ChangeEvent } from "react";
import IOrderContext from "../../interfaces/IOrderContext";
import { OrderContext } from "../../contexts/OrderContext";

const DeleteOrder = () => {

  const [id, setId] = useState<number>(0);
  const {orders, deleteOrderById} = useContext(OrderContext) as IOrderContext;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setId(parseInt(e.currentTarget.value));
  }

  const deleteOrder = () => {
    deleteOrderById(id);
  }

  return (
    <section>
      <h3>Slett en ordre</h3>            
      <p>Antall ordre i dejtabass: {orders.length}</p>
      <div>
        <label>Angi ID til ordre som skal slettes </label>
        <input type="number" onChange={handleChange} value={id} />
      </div>
      <button className="btn btn-primary" onClick={deleteOrder}>Slette orderini</button>
    </section>
  )
}

export default DeleteOrder;