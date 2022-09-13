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

const getUtvikler = employeeArray.filter(title => title.department == "Utvikler");
const getUx = employeeArray.filter(title => title.department == "ux");
const getHr = employeeArray.filter(title => title.department == "HR");

const departmentSelector = document.querySelector( "#department-selector" );
const searchBtn = document.querySelector( "#search-btn" );
const departmentOutput = document.querySelector( "#department-output" );


const checkSelectValue = () => {
  let htmlTxt = "";
  let department = departmentSelector.value;
  let chosenEmployees = employeeArray.filter(employee =>
      employee.department === department
    ) 
    chosenEmployees.forEach(employee => {
      htmlTxt += `
      <article>
        <h3>${employee.firstName} ${employee.surname}</h3>
        <p>${employee.department}</p>
      </article>
      `;
    })
    departmentOutput.innerHTML = "";
    departmentOutput.innerHTML = htmlTxt;
}

searchBtn.addEventListener( "click", checkSelectValue )