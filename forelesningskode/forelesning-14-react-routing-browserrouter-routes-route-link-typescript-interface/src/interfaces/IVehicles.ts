/*
    interface er et viktig verkøty i større React-prosjekter, med flere utviklere, for å ha kontroll på hvordan informasjonen om noe skal være.
    Et interface betegnes også gjerne som en "kontrakt".
    Ved å innføre interface får medutviklerne (og en selv) rask beskjed hvis man prøver å opprette noe (Vehicle i dette tilfellet) på feil måte.
*/
interface IVehicles { // interfacet forteller hvilken informasjon noe har, og hvilke datatyper den informasjonen har.
    name: string,
    model: string,
    crew: string
}

export default IVehicles;