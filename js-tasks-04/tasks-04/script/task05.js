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
]

const departmentSelector = document.querySelector( "#department-selector" );
const searchBtn = document.querySelector( "#search-btn" );
const departmentOutput = document.querySelector( "#department-output" );

const showDepartment = () => {
  
}

searchBtn.addEventListener( "click", showDepartment )