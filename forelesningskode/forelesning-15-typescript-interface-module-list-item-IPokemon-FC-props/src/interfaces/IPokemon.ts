interface IPokemon { // interface IPokemon har til ansvar å definere hva slags informasjon en Pokemon skal ha i applikasjonen.
    id: number,
    name: string,
    type?: string[] // Spørsmålstegnet betyr "optional": et pokemon-objekt må ikke inneholde property type, men id og name må angis.
}

// string[] betyr et array med strings ["tekst1", "tekst2", "tekst3"]

export default IPokemon;