const employeeArray = [
  {
    firstName: "André",
    surname: "Sørensen",
    department: "HR"
  },
  {
    firstName: "Tonje",
    surname: "Nordquist",
    department: "UX"
  },
  {
    firstName: "Chris",
    surname: "Glommen",
    department: "Utvikler"
  },
  {
    firstName: "Steffen",
    surname: "Johansen",
    department: "HR"
  },
  {
    firstName: "Celina",
    surname: "Vimme",
    department: "UX"
  },
  {
    firstName: "Fredrik",
    surname: "Kåsin",
    department: "Utvikler"
  }
];

const departmentSelector = document.querySelector( "#department-selector" );
const searchBtn = document.querySelector( "#search-btn" );
const departmentOutput = document.querySelector( "#department-output" );

const checkSelectValue = () => {
  let department = departmentSelector.value;
  switch (department){
    case "utvikler":
      printUtvikler();
      break;
    case "ux":
      printUx();
      break;
    case "hr":
      printHr();
      break;
  }
}

printUtvikler = () => console.log("utvikler")
printUx = () => console.log("ux")
printHr = () => console.log("hr")

searchBtn.addEventListener( "click", checkSelectValue )