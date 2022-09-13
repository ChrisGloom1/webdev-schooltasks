const SuperheroModule = ( () => { // IIFE - arrow function variant

  // Informasjonsbasen 
  const superheroes = [
    {
      name: "Amazing Woman",
      image: "amazing-woman.png",
      good: true
    },
    {
      name: "Green Cape",
      image: "green-cape.png",
      good: false
    },
    {
      name: "Shield",
      image: "shield.png",
      good: true
    },
    {
      name: "Something",
      image: "something.png",
      good: false
    },
    {
      name: "Vampire Man",
      image: "vampire-man.png",
      good: true
    }
  ];

  // Funksjoner
  const getAll = () => [...superheroes]; // Spread operator!! Sprer objektene inn i et nytt arrary
  const getEvil = () => {
    let evilSuperheroes = superheroes.filter( 
      superhero => superhero.good === false 
      );
      return evilSuperheroes;
  }

  // Tilgjengeliggjøring av funksjoner og variabler osv
  return{
    getAll, getEvil
  }

} )(); 

// console.log(SuperheroModule.getAll())
// ^Metode å hente ut fra modulen

export default SuperheroModule;