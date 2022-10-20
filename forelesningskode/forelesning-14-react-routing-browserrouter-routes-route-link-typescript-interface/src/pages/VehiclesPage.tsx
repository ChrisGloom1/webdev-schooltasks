/*
    Henter inn VehicleItem direkte her som en test. 
    Det ville vært mer normalt å hente inn VehicleList som skal generere x antall VehicleItem-komponenter.
*/
import VehicleItem from "../components/vehicles/VehicleItem";

const VehiclesPage = () => {
    return (
        <section>
            <h1>Kjøretøy i Star Wars</h1>

            {/* Liten test med manuell generering av et par VehicleItem */}
            <VehicleItem name="Wookie Moped" model="Wookie 234" crew="2"/>
            <VehicleItem name="Yoda sports car" model="Yodari" crew="5"/>
        </section>
    )
}

export default VehiclesPage;