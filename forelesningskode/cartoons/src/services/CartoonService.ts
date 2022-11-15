import axios from "axios";
import ICartoon from "../interfaces/ICartoon";

const CartoonService = (
  () => {
    const portnumber = "7182"
    const cartoonApiEndpoint = `https://localhost:${portnumber}/cartoon`;

    const getCartoons = async () => {
      const r = await axios.get(cartoonApiEndpoint);
      return r.data;
    }

    const getCartoonById = async (id: number) => {
      const r = await axios.get(`${cartoonApiEndpoint}/${id}`);
      return r.data;
    }

    const putCartoon = async (editedCartoon:ICartoon) => {
      const r = await axios.put(cartoonApiEndpoint, editedCartoon);
      return r.data; // gjør ingentign i denne løsningen, men er med allikevel
      // bør kontrollere med try/catch for å kontrollere suksess eller feil
    }

    return { getCartoons, getCartoonById, putCartoon }
  }
)();

export default CartoonService;