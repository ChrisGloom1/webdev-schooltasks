import { FC } from "react";
import ICartoon from "../../interfaces/ICartoon";

const CartoonItem : FC<ICartoon> = ({id, title, ageRestriction}) => {

  return (
    <article>
      <h3>{title} : {id}</h3>
      <p>Aldersgrense: {ageRestriction}</p>
    </article>
  )
}

export default CartoonItem;