import { FC } from 'react'; // FC står for Functional Component.
import IVehicles from '../../interfaces/IVehicles'; // Henter inn (importerer) interface.

/* 
    Dekorerer VehicleItem med FC og IVehicle. 
    Nå vil både denne komponenten og andre komponenter som gjør bruk av denne få umiddelbar beskjed om feil bruk, og også bedre intellisense.
    Man får eksempelvis umiddelbart beskjed hvis man skriver feil props-navn; eksempelvis modle istedenfor model: Property 'modle' does not exist on type 'IVehicles'
*/
const VehicleItem: FC<IVehicles> = ({name, model, crew}) => {
    return (
        <article>
            <h3>{name}</h3>
            <p>Modell: {model}</p>
            <p>Antall i bemanning: {crew}</p>
        </article>
    )
}

export default VehicleItem;