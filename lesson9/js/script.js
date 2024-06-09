const company = {
    sales: [{name: "John", salary: 100}, {name: "Jane", salary: 200}],
    development: {
        web: [{name: "Alex", salary: 200}, {name: "July", salary: 400}],
        internals: [{name: "Jack", salary: 1300}],
    }, //2200
  //  qa: [{name: "Victor", salary: 100}], //2300

};
const totalSum = function (department) {
    let salaryOfDepartment = 0;
    if (Array.isArray(department)) {
        salaryOfDepartment = department.reduce((accumulator, department) => {
            if (department.hasOwnProperty('salary') && typeof department.salary === 'number') {
                return accumulator + department.salary;
            }
            return accumulator;
        }, 0);

        return salaryOfDepartment;
    } else {
        for (let subDepartment in department) {
            salaryOfDepartment += totalSum(department[subDepartment], salaryOfDepartment);
        }
        return salaryOfDepartment;

    }
}

console.log(totalSum(company));




