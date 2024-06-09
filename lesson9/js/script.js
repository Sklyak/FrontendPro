function Company(name){
    this.name = name;
    // Employers[]
    this.departmants =
        { WEB: [] }
    ;
    // @var Employ
    this.addEmploy = (employ, department) => {
        department = department.toUpperCase();
        if (!this.departmants[department]) {
            this.departmants[department] = [];
        }
        this.departmants[department].push(employ);
    }
    this.getDepartmentSalary = (department) => {
        department = department.toUpperCase();
        if (!this.departmants[department]) {
            console.log("Department not found");
            return 0;
        }
        const salary = this.departmants[department].reduce((accumulator, department) => {
            if (department.hasOwnProperty('salary') && typeof department.salary === 'number') {
                return accumulator + department.salary;
            }
            return accumulator;
        }, 0);

        return salary;
    }
    this.getTotalSalary = () => {
        let total = 0;
        for (const department in this.departmants) {
            total += this.getDepartmentSalary(department);
        }
        return total;
    }
};
//use different initialisation for practise
const Employ = function (name, salary)  {
    this.name = name;
    this.salary = salary;
}

const googleCompany = new Company('Google');
googleCompany.addEmploy(new Employ('Victor', 500), "PM");
googleCompany.addEmploy(new Employ('Edmunt', 600), "PM");
googleCompany.addEmploy(new Employ('Masha', 30), "HR");
googleCompany.addEmploy(new Employ('Kate', 30), "HR");
googleCompany.addEmploy(new Employ('Martin', 900), "web");

console.log(googleCompany.getDepartmentSalary("QR"));
console.log(googleCompany.getDepartmentSalary("HR"));
console.log(googleCompany.getTotalSalary());




