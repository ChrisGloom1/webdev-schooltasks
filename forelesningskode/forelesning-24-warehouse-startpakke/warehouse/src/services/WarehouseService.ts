import axios from "axios";

const WarehouseService = (
    () => {

        const warehouseApiEndpoints = {
            orders: "https://localhost:7292/order"
        }

        const getAll = async () => {
            const result = await axios.get(warehouseApiEndpoints.orders);
            return result.data;
        }

        const deleteOrder = async (id: number) => {
          const r = await axios.delete(`${warehouseApiEndpoints.orders}/${id}`);
          console.log(r)
          return r; //TODO: Ordne slik at vi returnerer noe fornuftig til GUI. f.eks true/false?
        }

        return {
            getAll,
            deleteOrder
        }
    }
)();

export default WarehouseService;