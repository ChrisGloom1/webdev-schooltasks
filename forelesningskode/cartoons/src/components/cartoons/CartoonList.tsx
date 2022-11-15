import { useState, useEffect } from "react";
import CartoonService from "../../services/CartoonService";
import ICartoon from "../../interfaces/ICartoon";
import CartoonItem from "./CartoonItem";

const CartoonList = () => {

  const [cartoons, setCartoons] = useState<ICartoon[]>([]);

  useEffect(() => {
    getCartoonsFromService();
  }, []);

  const getCartoonsFromService = async () => {
    const cartoonsFromService = await CartoonService.getCartoons(); 
    setCartoons(cartoonsFromService);
  };

  const getCartoonList = () => {
    return cartoons.map( (cartoon, i)  => ( // vanlig parantes, ikke krøll. Hvis krøll, legg til enda en returnstatement
      <CartoonItem 
      key={`c-${i}`}
      id={cartoon.id}
      title={cartoon.title}
      ageRestriction={cartoon.ageRestriction}
      />
    ) )
  };

  return (
    <section>
      <h2>Tegnefilmseses</h2>
      <section>{getCartoonList()}</section>
    </section>
  )
}

export default CartoonList;