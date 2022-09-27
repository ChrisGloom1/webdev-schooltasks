const Module = ( ()=> {

  const checkIfArrayExists = (arrayName) => {
    const doesArrayExist = localStorage.getItem(arrayName) ===  null? true : false; 
    return doesArrayExist; 
  }
  

    return {
      checkIfArrayExists
  }

})();
export default Module;