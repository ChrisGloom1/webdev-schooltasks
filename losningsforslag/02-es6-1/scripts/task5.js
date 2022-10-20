/*
    HTML objects
*/
const departmentSelect = document.querySelector("#department-select");
const searchBtn = document.querySelector("#search-btn");
const employeesSection = document.querySelector("#employees-section");		

/*
    Variables
*/
const employeesArray = [
    { firstName: "John", surname: "Resig", department: "hr" },
    { firstName: "Lisa", surname: "Anderson", department: "hr" },
    { firstName: "Robert", surname: "Eich", department: "support" },
    { firstName: "Kumar", surname: "Sarwar", department: "support" },
    { firstName: "Anita", surname: "Turing", department: "marketing" },
    { firstName: "Aurora", surname: "Pedersen", department: "hr" }
];

let departmentChoice;
let chosenEmployees;

/*
    Functions		
*/
const search = () => {
    
    /*departmentChoice = departmentSelect.options[ departmentSelect.selectedIndex ].value;*/
    departmentChoice = departmentSelect.value;
    
    chosenEmployees = employeesArray.filter( employee => employee.department === departmentChoice );
    
    let htmlTxt = "";
    
    chosenEmployees.forEach( employee => {
        htmlTxt += `
            <article>
                <h3>${ employee.firstName } ${ employee.surname }</h3>
                <p>Department: ${ employee.department }</p>
            </article>
        `;
    })
    
    employeesSection.innerHTML = htmlTxt;
    
}
        
/*
    Events
*/
searchBtn.onclick = search;