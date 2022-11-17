import axios from "axios";

const WarehouseService = (
    () => {

        const warehouseApiEndpoints = {
            orders: "https://localhost:XXXX/order"
        }

        const getAll = async () => {
            const result = await axios.get(warehouseApiEndpoints.orders);
            return result.data;
        }

        const deleteOrder = async () => {
            
        }

        return {
            getAll,
            deleteOrder
        }
    }
)();

export default WarehouseService;