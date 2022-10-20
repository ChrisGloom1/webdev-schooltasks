/*
    En testkomponent hvor vi tester ut React hook useState.
    useState er en hook hvor vi kan angi tilstander til komponenten.
    Det er kun ved tilstandsendring at komponenten vil endre seg/oppdatere seg i nettleser.
    Det hjelper ikke å endre på vanlige variabler for å få nettsiden til å oppdatere seg. 
*/

import { useState } from 'react';

export const MachineItem = () => { // eksplisitt eksportering av MachineItem

    let machine1 = "Katapult";
    let [machine2, setMachine2] = useState("Tom"); /* Malen for en useState: let/const [navnPåTilstand, funksjonSomKanEndrePåTilstand] = useState(defaultVerdi)*/
    let [ent, setEnt] = useState("Ingen ent satt");

    const setMachine2Handler = () => {
        setMachine2("Trebuchet"); // her brukes setMachine2-funksjonen definert ovenfor på linje 13
    }

    const setEntHandler = (e) => {
        let entName = e.currentTarget.value;
        setEnt(entName);
    }

    /*const randomFunction = () => {
        alert("Random function");
    }*/

    return (
        <article>
            <h3>Sett entnavn</h3>
            <label>Entnavn</label>
            <input onChange={setEntHandler} type="text"/>
            <p>{ent}</p>
            <p>{ent}</p>
            <p>{ent}</p>

            <h3>Sett machine 2-navn</h3>
            <button onClick={setMachine2Handler}>Gjør noe</button>{/* <button onClick={() => { setMachine2Handler(); randomFunction() }}>Gjør noe</button> */}
            <p>Maskin 1: {machine1}</p>
            <p>Maskin 2: {machine2}</p>
            <p>{machine2}</p>
            <p>{machine2}</p>
            <p>{machine2}</p>
        </article>
    )
}

/*
    Eksempler på at man i prinsippet kan ha flere funksjoner og komponenter i samme fil og eksportere alle eksplisitt, så kan de andre filene/komponentene importere akkurat det de ønsker fra filen med eksplisitt import.
*/
export const getVersion = () => { 
    return 1;
}

export const getAuthor = () => {
    return "Rolando";
}