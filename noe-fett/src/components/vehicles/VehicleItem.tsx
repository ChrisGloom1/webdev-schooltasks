import { FC } from "react";
import IVehicle from "../../interfaces/IVehicle";

const VehicleItem: FC<IVehicle> = ({name, model, crew}) => {
  return (
    <article>
      <h3>{name}</h3>
      <p>Modell: {model}</p>
      <p>Brurer i skipet: {crew}</p>
    </article>
  )
}
export default VehicleItem;