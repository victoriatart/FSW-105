let employees = []
function employee(name, job_title, sellary) {
    this.name = name;
    this.job_title = job_title;
    this.sellary = sellary;
    this.status = 'Full Time'
    this.printEmployeeForm = () => {
        console.log(this)
    }
}
var new_emp = new employee('john', 'manager', 65000)
new_emp.status = "Part Time"
employees.push(new_emp)
let new_emp2 = new employee('bob', 'sub engineer', 35000)
employees.push(new_emp2)
let new_emp3 = new employee('allie', 'intern developer', 25000)
employees.push(new_emp3)
new_emp.printEmployeeForm()
new_emp2.printEmployeeForm()
new_emp3.printEmployeeForm()